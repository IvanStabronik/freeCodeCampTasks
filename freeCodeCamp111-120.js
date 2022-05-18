//task 111
function convertToInteger(str) {
    return parseInt(str);
}

convertToInteger("56");

//task 112
function convertToInteger(str) {
    return parseInt(str, 2);
}

convertToInteger("10011");

//task 113
function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);

//task 114
function checkSign(num) {
    return (num > 0) ? 'positive' : (num < 0) ? 'negative' : 'zero';
}

checkSign(10);

//task 115
// Only change code below this line
function countdown(n){
    if (n < 1) {
        return [];
    } else {
        const arr = countdown(n - 1);
        arr.unshift(n);
        return arr;
    }
}
// Only change code above this line

//task 116

//task 117

//task 118

//task 119

//task 120