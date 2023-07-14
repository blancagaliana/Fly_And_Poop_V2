class Sign {
    constructor(ctx, canvasHeight, canvasWidth) {
        this.ctx = ctx
        this.canvasHeight = canvasHeight
        this.canvasWidth = canvasWidth

        this.height = 100
        this.width = 120

        this.posX = this.canvasWidth + 120
        this.posY = 0
        this.ramdom = Math.random()


        if (this.ramdom > 0.5) {
            this.image = new Image()
            this.image.src = './avión.png'
        }
        else {
            this.image = new Image()
            this.image.src = './helicoptero.png'

        }
    }

    move() {
        this.posX = this.posX - 5
    }

    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)

    }
}