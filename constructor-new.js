// https://ja.javascript.info/constructor-new

// task: two-functions-one-object
let obj = {};
function A() { return obj; }

function B() { return obj; }

let a = new A;
let b = new B;

// alert(a == b);

// task: calculator-constructor
function Calculator() {
    this.read = function () {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
    };
    this.sum = function () {
        return this.a + this.b;
    };
    this.mul = function () {
        return this.a * this.b;
    };
};

// let calculator = new Calculator();
// calculator.read();

// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());

//task: accumulator
function Accumulator(startingValue) {
    this.value = +startingValue;
    this.read = function () {
        this.value += +prompt('How much to add?');
    };
}

// let accumulator = new Accumulator(1); // 初期値 1
// accumulator.read(); // ユーザの入力値の加算
// accumulator.read(); // ユーザの入力値の加算
// alert(accumulator.value); // それらの値の合計を表示

//task: calculator-extendable
function ExtendableCalculator() {
    let methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
    };

    this.calculate = function (formula) {
        let array = formula.split(' ');
        a = +array[0];
        op = array[1];
        b = +array[2];

        if (!methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        return methods[op](a, b);
    };

    this.addMethod = function (name, func) {
        methods[name] = func;
    };
}

let calc = new ExtendableCalculator;
alert(calc.calculate("3 + 7")); // 10

let powerCalc = new ExtendableCalculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);