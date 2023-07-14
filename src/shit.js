class Shits {
    constructor(ctx, playerPosX, playerPosY, playerWidth, playerHeight) {
        this.ctx = ctx
        
        this.width = 51 * 1.5
        this.height = 53 * 2 

        this.posX = playerPosX + playerWidth / 2 - this.width / 2
        this.posY = playerPosY + playerHeight 

        this.image = new Image()
        this.image.src = './Mierda.png'
    }

    update() {
        this.draw()
        this.move()
    }

    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
    }

    move() {
        this.posY += 10
    }
}