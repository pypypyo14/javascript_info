// https://ja.javascript.info/array-methods
// task: camelcase
function camelize(str) {
    return camelizeStr = str
        .split('-')
        .map((item, index) =>
            (index === 0) ? item : item[0].toUpperCase() + item.slice(1)
        )
        .join('');
};

// task: filter-range
function filterRange(arr, a, b) {
    return filterdArr = arr.filter((item) =>
        a <= item && item <= b
    );
}

// task: filter-range-in-place
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || b < arr[i]) {
            arr.splice(i, 1);
            //配列が1つ前に詰めるので
            i--;
        }
    }
}

// task: sort-back;
function sortBack(arr) {
    function compare(a, b) {
        return b - a;
    }
    arr.sort(compare);
}

// task: copy-sort-array
function copySorted(arr) {
    // map(item => item) としそうになった…けど、単純なコピーならsliceのがよい
    return arr.slice().sort();
}

// task: array-get-names

let john = { name: "John", surname: "Smith", age: 25 };
let pete = { name: "Pete", surname: "Hunt", age: 30 };
let mary = { name: "Mary", surname: "Key", age: 29 };

let users = [john, pete, mary];

let names = users.map((item) => item["name"]);

// task: map-objects;
let usersMapped = users.map((item) => ({
    fullName: `${item.name} ${item.surname}`,
    id: `${item.id}`,
}));

// task: sort-object
function sortByName(arr) {
    arr.sort((a, b) => b.name < a.name ? 1 : -1);
}

// task: shuffle
function shuffle(arr) {
    // ランダムで負の数〜正の数.
    // バイアスが発生するので Fisher-Yates shuffle を別途勉強する。。
    arr.sort((a, b) => Math.random() - 0.5);
}

// task: avarage-age
function getAverageAge(users) {
    // ダサ回答。配列のデータにもとづいて単一の値を計算する場合はreduceが使える
    // let i = 0;
    // let sum = 0;
    // while (i < users.length) {
    //     sum += users[i].age;
    //     i++;
    // }
    // return sum / i;
    return users.reduce((sum, user) => sum + user.age, 0) / users.length; // 0はsumの初期値
}

// task: array-unique
let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

function unique(arr) {
    return arr.filter((str, index, arr) => {
        // arr.indexOf(str) = この要素が現れる最初のindex
        return arr.indexOf(str) === index;
    })
}