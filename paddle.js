export default class Paddle {
    constructor(gameHeight, gameWidth) {
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;

        this.paddleWidth = 150;
        this.paddleHeight = 15;

        this.position = {
            x: this.gameWidth / 2 - this.paddleWidth / 2,
            y: this.gameHeight - this.paddleHeight - 10
        }
    }

    draw(ctx) {
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(this.position.x, this.position.y, this.paddleWidth, this.paddleHeight);
        }
    }