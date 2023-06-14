// 1 Сортировка массива с числами по возрастанию

let arr = [9, 7, 5, 4, 10, 2, 1, 3, 6, 8]

function sort(arr, func) {
    let result = [...arr]
    for (i = 0; i < result.length; i++) {
        for (let i = 0; i < result.length - 1; i++) {
            if (func(result[i], result[i + 1])) {
                let temp = result[i]
                result[i] = result[i + 1]
                result[i + 1] = temp
            }
        }
    }
    return result
}

console.log(sort(arr, function (a, b) {
    return a > b
}));

// 2 Сортировка массива с числами по убыванию

function sort(arr, func) {
    let result = [...arr]
    for (i = 0; i < result.length; i++) {
        for (let i = 0; i < result.length - 1; i++) {
            if (func(result[i], result[i + 1])) {
                let temp = result[i]
                result[i] = result[i + 1]
                result[i + 1] = temp
            }
        }
    }
    return result
}

console.log(sort(arr, function (a, b) {
    return a < b
}));


// Можно немного изменить и получить сортировк массива объектов

function sort(arr, func) {
    let result = [...arr]
    for (i = 0; i < result.length; i++) {
        for (let i = 0; i < result.length - 1; i++) {
            if (func(result[i], result[i + 1])) {
                let temp = result[i]
                result[i] = result[i + 1]
                result[i + 1] = temp
            }
        }
    }
    return result
}

let adultСhildren = [
    {name: 'Ваня', age: 30},
    {name: 'Маша', age: 37},
    {name: 'Коля', age: 21},
    {name: 'Паша', age: 24}
]

console.log(sort(adultСhildren, function (a, b) {
    return a.age > b.age
}));