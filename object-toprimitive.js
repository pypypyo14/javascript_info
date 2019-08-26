// https://ja.javascript.info/object-toprimitive
// objectの数値変換、文字列変換

// プリミティブが必要とされる文脈でオブジェクトが使われる場合は、ToPrimitiveを使ってプリミティブ値に変換される。

// 変換の優先度1: [Symbol.toPrimitive] という組み込みシンボルを、変換メソッドの名前として使う
let user = {
    name: "Saori",
    money: 1000,
    [Symbol.toPrimitive](hint) {
        //hint = string, number, default のどれか
        alert(`hint: ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
};

alert(user);
alert(+user);
alert(user + 500);

// 変換の優先度2: [Symbol.toPrimitive]がない場合は jsはtoStringとvalueOfを試す
let user2 = {
    name: "Ryo",
    money: 2000,

    //hint="string"の場合
    toString() {
        return `{name: "${this.name}"}`;
    },
    // hint="number" or "default" の場合
    valueOf() {
        return this.money;
    }
}

alert(user2);
alert(+user2);
alert(user2 + 500);