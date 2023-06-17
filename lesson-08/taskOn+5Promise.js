function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

new Promise(function (resolve, reject) {
    let number = getRandomNumber(1, 10);
    resolve(number);
}).then(function (number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(number * 2), 3000);
    });
}).then(function (number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(number * 2), 3000);
    });

}).then(number => console.log(number))
    .catch(err => console.log(err));