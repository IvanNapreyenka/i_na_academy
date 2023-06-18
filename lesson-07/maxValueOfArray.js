//first variant
function getMaxNumber() {
    let result = arr[0];
    for (let i of arr) {
        if (result < i) {
            result = i;
        }
    }
    return result;
};

let arr = [1, 9, 6, -3, 99, 0];

console.log(getMaxNumber(arr));

//second variant

function getMaxNumber() {
    return Math.max(...arr);
};


console.log(getMaxNumber(arr));