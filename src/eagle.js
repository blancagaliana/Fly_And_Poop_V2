class eagle {
    constructor(ctx, canvasWidth, canvasHeight) {
        this.canvasHeight = canvasHeight
        this.canvasWidth = canvasWidth
        this.ctx = ctx

        this.height = 87
        this.width = 147

        this.posX = this.canvasWidth + canvasWidth - this.width
        this.posY = Math.random() * (this.canvasHeight - 40)

        this.image = new Image()
        this.image.src = './aguila.png'
    }

    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
    }
    move() {
        this.posX = this.posX - 15
    }
}