function reverse(arr) {
    let rev = new Array;
    for (let i = arr.length - 1; i >= 0; i--) {
        rev.push(arr[i]);
    }
    return rev;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];   //also can be used for let arr = ["first", "second", "third"];
let rev = reverse(arr);
console.log(rev);