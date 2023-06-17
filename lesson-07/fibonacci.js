function fibonacci(n, a, b) {        //// n - количество элементов массива, a и b - первые два числа ряда Фибоначчи
    let arr = [a, b];
    let k;
    for (let i = 3; i <= n; i++) {
        k = a + b;
        arr.push(k);
        a = b;
        b = k;
    }
    return arr;
}
console.log(fibonacci(6, 5, 13));