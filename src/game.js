const game = {
    authors: 'Javier, Mariano',
    version: '1.0',
    title: 'Fly & Poop',
    score: 0,
    width: null,
    height: null,

    canvas: null,
    ctx: null,
    background: null,

    FPS: 60,
    frames: null,
    interval: null,

    player: null,
    trees: [],
    signs: [],
    eagles: [],
    balds: [],


    init() {
        this.initCanvas()
        this.loadImages()
        this.setDimensions()
        this.generateAll()
        this.start()
    },

    initCanvas() {
        this.canvas = document.querySelector('#canvas')
        this.ctx = this.canvas.getContext('2d')
    },

    loadImages() {
        this.gameOverScreen = new Image()
        this.gameOverScreen.src = "./GameOver.png"
        this.background = new Image()
        this.background.src = "./Menu.png"

    },

    setDimensions() {
        this.width = window.innerWidth
        this.height = window.innerHeight
        this.canvas.width = this.width
        this.canvas.height = this.height
    },

    generateAll() {
        this.player = new Player(this.ctx, this.height)
        this.trees.push(new Tree(this.ctx, this.height, this.width))
        this.signs.push(new Sign(this.ctx, this.height, this.width))
        this.eagles.push(new eagle(this.ctx, this.height, this.width))
        this.balds.push(new Bald(this.ctx, this.height, this.width))
    },

    drawAll() {
        this.player.update()
        this.trees.forEach(tree => tree.draw())
        this.signs.forEach(sign => sign.draw())
        this.eagles.forEach(eagle => eagle.draw())
        this.balds.forEach(bald => bald.draw())

        this.ctx.fillStyle = "black"
        this.ctx.font = "32px sans-serif"
        this.ctx.fillText(`SCORE: ${this.score}`, 100, 100)

        this.ctx.fillStyle = "black"
        this.ctx.font = "24px sans-serif"
        this.ctx.fillText(`LIVES: ${this.player.lives}`, 100, 120)
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.width, this.height)
        this.ctx.clearRect(0, 0, this.posY, this.posX)
    },

    clearItems() {
        this.trees = this.trees.filter(tree => tree.posX > 0)
        this.signs = this.signs.filter(sign => sign.posX > 0)
        this.shits = this.shits.filter(shit => shit.posY > this.height)
        this.eagles = this.eagles.filter(eagle => eagle.posX > 0)
        this.balds = this.balds.filter(bald => bald.posX > 0)
    },

    checkCollisions() {
        this.trees.forEach((tree, index) => {
            if (tree.posX < this.player.posX + this.player.width
                && this.player.posX < tree.posX + tree.width
                && this.player.posY + this.player.height > tree.posY) {
                this.player.lives--
                this.trees.splice(index, 1)
                if (this.player.lives <= 0) this.gameOver()
            }

        })

        this.signs.forEach((sign, index) => {
            if (sign.posX < this.player.posX + this.player.width
                && this.player.posX < sign.posX + sign.width
                && this.player.posY + this.player.height < sign.posY + sign.height) {
                this.player.lives--
                this.signs.splice(index, 1)
                if (this.player.lives <= 0) this.gameOver()
            }
        })

        this.eagles.forEach((eagle, index) => {
            if (this.player.posX + this.player.width > eagle.posX
                && this.player.posX < eagle.posX + eagle.width
                && this.player.posY + this.player.height > eagle.posY
                && this.player.posY < eagle.posY + eagle.height) {
                this.player.lives--
                this.eagles.splice(index, 1)
                if (this.player.lives === 0) this.gameOver()
            }
        })


        this.balds.forEach(bald => {
            this.player.shits.forEach((shit, index) => {
                if (shit.posY + shit.height > bald.posY
                    && shit.posY < bald.posY + bald.height
                    && shit.posX + shit.width > bald.posX
                    && shit.posX < bald.posX + bald.width) {
                    this.score += 50
                    this.balds.splice(index, 1)
                }
            })
        })
    },

    gameOver() {
        this.clearAll()
        clearInterval(this.interval)
        this.ctx.drawImage(this.gameOverScreen, 0, 0, this.width, this.height)
        this.ctx.fillStyle = "red"
        this.ctx.font = "48px sans-serif"
        this.ctx.fillText(`Your Score is ${this.score}`, this.width / 2 - 165, this.height / 2 + 200)

        setTimeout(() => {
            location.reload()
        }, 5000)
    },

    start() {
        this.player.setEventListeners()
        this.drawAll()

        this.interval = setInterval(() => {
            this.frames++
            if (this.frames % 140 === 0) {
                this.trees.push(new Tree(this.ctx, this.height, this.width))
            }
            if (this.frames % 200 === 0) {
                this.signs.push(new Sign(this.ctx, this.height, this.width))
            }
            if (this.frames % 350 === 0) {
                this.eagles.push(new eagle(this.ctx, this.height, this.width))
            }
            if (this.frames % 600 === 0) {
                this.balds.push(new Bald(this.ctx, this.height, this.width))
            }
            if (this.frames % 20 === 0) {
                this.player.canShoot = true
            }
            if (this.frames % 30 === 0) {
                this.score = this.score + 1
            }

            this.clearAll()
            this.drawAll()
            this.checkCollisions()
            this.trees.forEach(tree => tree.move())
            this.signs.forEach(sign => sign.move())
            this.eagles.forEach(eagle => eagle.move())
            this.balds.forEach(bald => bald.update())
            this.player.shits.forEach(shit => shit.update())
        }, 1000 / this.FPS)
    },
} 