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
function rangeOfNumbers(startNum, endNum) {
    if (endNum - startNum === 0) {
        return [startNum];
    } else {
        let numbers = rangeOfNumbers(startNum, endNum - 1)
        numbers.push(endNum);
        return numbers;
    }
};

//task 117
function checkScope() {
    let i = 'function scope';
    if (true) {
        let i = 'block scope';
        console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}

//task 118
const s = [5, 7, 2];
function editInPlace() {
    // Only change code below this line

    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
    // Using s = [2, 5, 7] would be invalid

    // Only change code above this line
}
editInPlace();

//task 119
function freezeObj() {
    const MATH_CONSTANTS = {
        PI: 3.14
    };
    // Only change code below this line
    Object.freeze(MATH_CONSTANTS);

    // Only change code above this line
    try {
        MATH_CONSTANTS.PI = 99;
    } catch(ex) {
        console.log(ex);
    }
    return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

//task 120
const magic = () => {
    return new Date();
};