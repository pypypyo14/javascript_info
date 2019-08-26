// https://ja.javascript.info/number
// task: sum-interface
let a = +prompt('The first number?');
let b = +prompt('The second number?');
console.log(a + b);

//task: why-rounded-down
console.log(Math.round(6.35 * 10) / 10);

// repeat-until-number
function repeatUntilNumber() {
    let num;
    do {
        num = prompt('Enter a number please?', 0);
    } while (!isFinite(num)); {
        if (num === "" || num === null) return null;
    }
    return num;
};

console.log(`read: ${repeatUntilNumber()}`);

function random(min, max) {
    if (min >= max) return NaN;
    let value = min + Math.random() * (max - min);
    return value;
}

console.log(random(1, 5));

function randomInt(min, max) {
    if (min >= max) return NaN;
    let value = min + Math.random() * (max + 1 - min);
    console.log(value);
    return Math.floor(value); // 両端の確率を下げないようにする必要があるため、単純な四捨五入はNG

}
console.log(randomInt(1, 5));