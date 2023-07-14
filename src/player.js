class Player {
    constructor(ctx, canvasHeight, canvasWidth) {
        this.ctx = ctx
        this.canvasHeight = canvasHeight
        this.canvasWidth = canvasWidth

        this.height = 36 * 2
        this.width = 29 * 2
        this.posX = 200
        this.posY = this.canvasHeight - this.height - 50

        this.lives = 3
        this.shits = []

        this.canMoveUp = false
        this.canMoveDown = false
        this.canMoveRight = false
        this.canMoveLeft = false
        this.canShoot = true

        this.image = new Image()
        this.image.src = './cuervo.png'
    }

    update() {
        this.draw()
        this.move()

    }

    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
    }

    move() {
        if (this.canMoveUp && this.posY > 0) this.posY -= 15
        if (this.canMoveDown && this.posY + this.height < this.canvasHeight) this.posY += 15
        if (this.canMoveRight) this.posX += 15
        if (this.canMoveLeft && this.posX > 0) this.posX -= 15
    }

    setEventListeners() {
        document.addEventListener('keydown', (event) => {
            const key = event.key
            if (key === 'ArrowUp') this.canMoveUp = true
            if (key === 'ArrowDown') this.canMoveDown = true
            if (key === 'w') this.canMoveUp = true
            if (key === 's') this.canMoveDown = true

            if (key === "d") this.canMoveRight = true
            if (key === "a") this.canMoveLeft = true
            if (key === 'ArrowRight') this.canMoveRight = true
            if (key === 'ArrowLeft') this.canMoveLeft = true

            if (key === "e" && this.canShoot) {
                this.shits.push(new Shits(this.ctx, this.posX, this.posY, this.width, this.height))
                this.canShoot = false
            }
        })
        document.addEventListener("keyup", (event) => {
            const key = event.key
            if (key === "ArrowUp") this.move(), this.canMoveUp = false
            if (key === "ArrowDown") this.move(), this.canMoveDown = false
            if (key === "w") this.move(), this.canMoveUp = false
            if (key === "s") this.move(), this.canMoveDown = false

            if (key === "d") this.move(), this.canMoveRight = false
            if (key === "a") this.move(), this.canMoveLeft = false
            if (key === 'ArrowRight') this.move(), this.canMoveRight = false
            if (key === 'ArrowLeft') this.move(), this.canMoveLeft = false

        })
    }
}