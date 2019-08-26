// https://ja.javascript.info/object

// task: hello-object
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pate";
delete user.name;

// task: is-empty
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

//task: sum-object
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
function sumSalaries(salaries) {
    let sum = 0;
    for (let key in salaries) {
        sum += salaries[key];
    }
    return sum;
};

//task: multiply-numeric
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == "number") {
            obj[key] *= 2;
        }
    }
}
