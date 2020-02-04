import Paddle from './paddle.js';

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

let gameHeight = 600;
let gameWidth = 800;

let paddle = new Paddle(gameHeight, gameWidth);
paddle.draw(ctx);

