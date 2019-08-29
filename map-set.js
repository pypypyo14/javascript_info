// https://ja.javascript.info/map-set-weakmap-weakset
/* objectで実装するkeyvalueとMapの違い */
// ・Mapはiterable(反復可能)
// ・MapはKeyにstring以外の値を使える。objectをkeyにしたりもできる
// ・いい感じのメソッドがある
//  Map使ったほうが嬉しいことは多そう

let keyValue = {
    AAA: "aaa",
    BBB: "bbb",
    CCC: "ccc",
};

keyValue["Key"] = "Value";


let map = new Map([
    ["AAA", "aaa"],
    ["BBB", "bbb"],
    ["CCC", "ccc"],
]);

map.set("Key", "Value");

/* arrayとsetのちがい */
// setは配列ではなく集合。入力した値がこの中に含まれるかを判定するとき等に使う？
// 同じ値を1つしか持たない。keyはない。
// iterable。


// task: array-unique-map
let array = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
function unique(array) {
    return Array.from(new Set(array));
    // new Set(array); だけだとset型になってしまう
}


// task: filter-anagrams
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
    let map = new Map();
    for (let word of arr) {
        let sorted = word.toLowerCase().split('').sort().join('');
        map.set(sorted, word);
        // ソート後の文字列(sorted)をkeyにもつ => 3つのkeyを持つmapができる
    };
    return Array.from(map.values());
}