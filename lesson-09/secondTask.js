function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function getNum() {
    return new Promise((res) => {
        let number = getRandomNumber(1, 5)
        setTimeout(res, 3000, number)
    })
}

async function getSquareNumber() {
    let result = await getNum()

    console.log(Math.pow(result, 2));
}

getSquareNumber();