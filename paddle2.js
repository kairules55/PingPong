export default class Paddle2 {
    constructor(gameHeight, gameWidth) {
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;

        this.paddleWidth = 150;
        this.paddleHeight = 15;

        this.speed = 10;

        this.position = {
            x: this.gameWidth / 2 - this.paddleWidth / 2,
            y: 10
        }
    }

    draw(ctx) {
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(this.position.x, this.position.y, this.paddleWidth, this.paddleHeight);
    }

    moveLeft() {
        if (this.position.x <= 0) {
            return;
        }
        this.position.x -= this.speed;
    }

    moveRight() {
        if (this.position.x + this.paddleWidth >= this.gameWidth) {
            return;
        }
        this.position.x += this.speed;
    }
}