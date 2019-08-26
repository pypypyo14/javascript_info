// https://ja.javascript.info/object-methods

// task: calculator
let calculator = {
    a: "", // なくてもいい
    b: "",
    c: "",
    read() {
        this.a = +prompt('a?', 0);
        this.b = +prompt('b?', 0);
        this.c = +prompt('c?', 0);
    },
    sum() {
        let sumResult = 0;
        for (let key in this) {
            if (typeof this[key] == "number") {
                sumResult += this[key];
            };
        };
        return sumResult;
    },
    mul() {
        let mulResult = 1;
        for (let key in this) {
            if (typeof this[key] == "number") {
                mulResult *= this[key];
            };
        };
        return mulResult;
    }
}

calculator.read();
alert(calculator.sum());
alert(calculator.mul());



// task: chain-calls
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function () { //現在の段を表示
        alert(this.step);
        return this;
    },
};

ladder.up().up().down().showStep().up().showStep(); // 2