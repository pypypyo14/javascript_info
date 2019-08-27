// https://ja.javascript.info/string
// task: ucfirst
function ucFirst(str) {
    if (typeof str != "string" || !str) return str;
    return str[0].toUpperCase() + str.slice(1)
}


// task: check-spam
function checkSpam(str) {
    const spamWords = ["VIAGRA", "XXX"]
    let upperStr = str.toUpperCase();
    for (let i = 0; i <= spamWords.length; i++) {
        if (upperStr.includes(spamWords[i])) {
            return true;
        };
    }
    return false;
}


// task: truncate
function truncate(str, maxlength) {
    if (str.length < maxlength) {
        return str;
    }
    let omittedStr = str.slice(0, maxlength - 1) + "…";
    return omittedStr;
}

//task: extract-currency
function extractCurrencyValue(val) {
    //return val.replace(/[^0-9]/g, ''); こういう意図ではなかった
    return +val.slice(1);
}