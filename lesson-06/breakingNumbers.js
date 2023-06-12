// Целые числа

let mainNumber1 = 20;

for (let i = 0; i < 5; i++) {

    let firstNumber = Math.floor(Math.random() * (mainNumber1 - 1) + 1);

    let remainder = mainNumber1 - firstNumber

    let secondNumber = Math.floor(Math.random() * (remainder - 1) + 1);

    let thirdNumber = (mainNumber1 - firstNumber) - secondNumber;

    console.log([firstNumber, secondNumber, thirdNumber]);

}


//Дробные числа 
let mainNumber2 = 20;

for (let i = 0; i < 5; i++) {
    let firstNumber = (Math.random() * (mainNumber2 - 2) + 1);

    let firstNumberFixed = firstNumber.toFixed(2)

    let remainder = mainNumber2 - firstNumber

    let secondNumber = (Math.random() * (remainder - 1) + 1);

    let secondNumberFixed = secondNumber.toFixed(2)

    let thirdNumber = (mainNumber2 - firstNumber) - secondNumber;

    let thirdNumberFixed = thirdNumber.toFixed(2)

    console.log([firstNumberFixed, secondNumberFixed, thirdNumberFixed]);
};



//Второй вариант

let mainNumber3 = 20;

let arrayWithNumbers = [];

while (mainNumber3 > 0) {
    arrayWithNumbers.push(mainNumber3--);
}

let Sum = function (nums, target = 20) {
    let result = [];

    if (nums.length < 3) {
        return result;
    }

    nums = nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > target) {
            break;
        }

        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        let j = i + 1;

        let k = nums.length - 1;

        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];

            if (sum === target) {
                result.push([nums[i], nums[j], nums[k]]);

                while (nums[j] === nums[j + 1]) j++;
                while (nums[k] === nums[k - 1]) k--;

                j++;
                k--;
                continue;
            }
            if (sum < target) {
                j++;
                continue;
            }
            if (sum > target) {
                k--;
                continue;
            }
        }
    }
    return result
};


console.log(Sum(arrayWithNumbers));