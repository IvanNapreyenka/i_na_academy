
let arr = [1, 3, 3, 5, 7, 7, 9];

function getUniqValues() {
    return Array.from(new Set(arr));
};

console.log(getUniqValues(arr));