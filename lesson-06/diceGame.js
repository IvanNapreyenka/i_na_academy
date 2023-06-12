let firstPlayerFirstThrow = Math.floor(Math.random() * 6) + 1;

let secondPlayerFirstThrow = Math.floor(Math.random() * 6) + 1;

let firstPlayerSecondThrow = Math.floor(Math.random() * 6) + 1;

let secondPlayerSecondThrow = Math.floor(Math.random() * 6) + 1;

let firstPlayerThirdThrow = Math.floor(Math.random() * 6) + 1;

let secondPlayerThirdThrow = Math.floor(Math.random() * 6) + 1;


let diceTotalFirstPlayer = firstPlayerFirstThrow + firstPlayerSecondThrow + firstPlayerThirdThrow;

let diceTotalSecondPlayer = secondPlayerFirstThrow + secondPlayerSecondThrow + secondPlayerThirdThrow;

if (diceTotalFirstPlayer === diceTotalSecondPlayer) {
    message = 'Draw';
} else if (diceTotalFirstPlayer > diceTotalSecondPlayer) {
    message = 'The first player win';
} else if (diceTotalFirstPlayer < diceTotalSecondPlayer) {
    message = 'The second player win';
}

alert = (message);

console.log(alert);