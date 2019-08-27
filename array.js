// https://ja.javascript.info/array
// task: create-array
function createArray() {
    let styles = ["Jazz", "Blues"];
    styles.push("Rock-n-Roll");
    if (styles.length % 2 != 0) {
        let median = Math.floor(((styles.length - 1) / 2));
        styles[median] = "Classics";
    };
    styles.shift(1);
    styles.unshift("Rap", "Reggae");
}

//task: array-input-sum
function sumInput() {
    let numbers = [];
    let sum = 0;
    while (true) {
        let val = prompt("A number please?", 0);
        if (val === "" || val === null || !isFinite(val)) break;
        numbers.push(val);
    }
    for (let number of numbers) {
        sum += +number;
    }
    return sum;
}

//tasl: maximal-subarray
function getMaxSubSum(arr) {
    let maxSum = 0;
    let particalSum = 0;
    for (let item of arr) {
        particalSum += item;
        maxSum = Math.max(maxSum, particalSum);
        if (particalSum < 0) particalSum = 0;
    }
    return maxSum;
}
