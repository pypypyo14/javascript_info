// https://ja.javascript.info/iterable
// iterableなオブジェクトを作ってみる

let range = {
    min: 5,
    max: 10,
};

function iterableCheck() {
    for (let num of range) {
        // for ... of は[Symbol.iterafor]を呼び出し実行する。→ iteraforが返ってくる（★1）
        // for ...ifが次の値を求めるときはiteraforの中のnext()を使う
        console.log(num);
    }
};

// ここで `iterableCheck();`すると TypeError: range is not iterable

range[Symbol.iterator] = function () {
    return { // iteraforを返す(★1)
        current: this.min,
        last: this.max,
        next() { // iteraforにはnext()が含まれる
            if (this.current <= this.last) {
                //まだ終わってないよという情報(done: false)とともにvalueをかえす(for ... ofの ""..." 部分)
                return { done: false, value: this.current++ };
            } else {
                // 繰り返しが終わったことを示す
                return { done: true };
            }
        },
    };
};

iterableCheck();