function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function getNum(time, min, max) {
    return new Promise((res) => {
        let number = getRandomNumber(min, max)
        setTimeout(res, time, number)
    })
}

let getNum1 = getNum(3000, 1, 5)

let getNum2 = getNum(5000, 6, 10)

async function getSumNumbers() {
    let result1 = await getNum1

    let result2 = await getNum2

    console.log(result1 + result2);
}

getSumNumbers();