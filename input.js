
export default class InputHandler {
    constructor(paddle, paddle2) {
        document.addEventListener('keydown', function (event) {
            switch (event.keyCode) {
                case 37:
                    paddle2.moveLeft();
                    paddle.moveLeft();
                    break;
                case 39:
                    paddle2.moveRight();
                    paddle.moveRight();
                    break;
                default:
            }
        });
    }
}