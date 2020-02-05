export default class Ball {
    constructor(gameWidth, gameHeight) {
        this.ball = document.getElementById('ballimg');
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;
        this.speed = {
            x: 2,
            y: 2
        };
        this.position = {
            x: 10,
            y: 10
        };
        this.size = 16;
    }

    draw(ctx) {
        ctx.drawImage(this.ball, this.position.x, this.position.y, this.size, this.size);
    }

    update(deltaTime, paddle, gamestate, paddle2) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
            this.speed.x = -this.speed.x;
        }

        if (this.position.y < 0) {
            gamestate.state = 'gameover';
        }

        if (this.position.y + this.size >= this.gameHeight) {
            gamestate.state = 'gameover';
        }

        if(this.position.x >= paddle2.position.x && this.position.x <= paddle2.position.x + paddle2.paddleWidth && this.position.y <= paddle2.position.y + paddle2.paddleHeight){
            this.speed.y = -this.speed.y;
        }

        if (this.position.y + this.size >= paddle.position.y && this.position.x >= paddle.position.x && this.position.x <= paddle.position.x + paddle.paddleWidth) {
            this.speed.y = -this.speed.y;
        }
    }
}