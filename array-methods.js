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

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let names = users.map((item) => item["name"]);

// task: map-objects;
let usersMapped = users.map((item) => ({
    fullName: `${item.name} ${item.surname}`,
    id: `${item.id}`,
}));

// task: sort-object
// task: shuffle
// task: avarage-age
// task: array-unique