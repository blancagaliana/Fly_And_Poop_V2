class Bald {
    constructor(ctx, canvasHeight, canvasWidth) {
        this.ctx = ctx
        this.canvasHeight = canvasHeight
        this.canvasWidth = canvasWidth

        this.height = 95
        this.width = 82

        this.posX = this.canvasWidth
        this.posY = this.canvasHeight - this.height - 35

        this.image = new Image()
        this.image.src = './Calvo.png'
    }

    update() {
        this.draw()
        this.move()
    }

    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
    }

    move() {
        this.posX = this.posX - 2
    }
}