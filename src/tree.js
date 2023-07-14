class Tree {
    constructor(ctx, canvasHeight, canvasWidth) {
        this.ctx = ctx
        this.canvasHeight = canvasHeight
        this.canvasWidth = canvasWidth

        this.height = Math.random() * this.canvasHeight - 30 * 2
        this.width = 150
        this.max = this.canvasHeight - 30 * 2

        this.posX = this.canvasWidth
        this.posY = this.canvasHeight - this.height - 25

        this.image = new Image()
        if (this.height > this.max / 3 * 2) {
            this.image.src = './foto arbol 4.png'
        }
        else if (this.height > this.max / 3) {
            this.image.src = './foto arbol 2.png'
        }
        else if (this.height > this.max) {
            this.image.src = './foto arbol 5.png'
        }

    }

    move() {
        this.posX = this.posX - 4
    }


    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
    }

}
