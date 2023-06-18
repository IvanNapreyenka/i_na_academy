let numOne = 3487,
    numTwo = 3794;

function getComparisonNumber(numOne, numTwo) {
    let resultOne = 0;
    let arrOne = ('' + numOne).split('');
    let arrTwo = ('' + numTwo).split('');
    for (let i = 0; i < arrOne.length; i++) {
        for (let j = 0; j < arrTwo.length; j++) {
            if (arrOne[i] === arrTwo[j]) {
                resultOne = i++
            }
        }
    }
    return resultOne
}

console.log(getComparisonNumber(numOne, numTwo));