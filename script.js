import Paddle from './paddle.js';
import InputHandler from './input.js';
import Ball from './ball.js';
import Paddle2 from './paddle2.js';

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let gameHeight = 600;
let gameWidth = 800;


let paddle = new Paddle(gameHeight, gameWidth);
let paddle2 = new Paddle2(gameHeight, gameWidth);
let ball = new Ball(gameWidth, gameHeight);
new InputHandler(paddle,paddle2);


let lastTime = 0;
let gamestate = {
    state: 'game'
};

function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    if (gamestate.state == 'game') {
        ctx.clearRect(0, 0, gameWidth, gameHeight);
        paddle.draw(ctx);
        paddle2.draw(ctx);
        ball.update(deltaTime, paddle,gamestate,paddle2);
        ball.draw(ctx);
    }
    if (gamestate.state == 'gameover') {
        ctx.clearRect(0, 0, gameWidth, gameHeight);
        ctx.rect(0, 0, gameWidth, gameHeight);
        ctx.fillStyle = "rgba(0,0,0,1)";
        ctx.fill();
        ctx.font = "30px Arial";
        ctx.fillStyle = "white";
        ctx.textAlign = "center";
        ctx.fillText("GAME OVER", gameWidth / 2, gameHeight / 2);
    }
    requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);