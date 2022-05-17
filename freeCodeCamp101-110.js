//task 101
// Setup
const myArray = [];
for (let i = 9; i > 0; i -= 2) {
    myArray.push(i);
}
// Only change code below this line



//task 102
// Setup
const myArr = [2, 3, 4, 5, 6];
let total = 0;
for(let i = 0; i < myArr.length; i++) {
    total += myArr[i]
}
// Only change code below this line



//task 103
function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    // Only change code above this line
    return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);



//task 104
// Setup
const myArray = [];
let i = 10;
do {
    myArray.push(i);
    i++;
} while (i <= 10)
// Only change code below this line




//task 105
function sum(arr, n) {
    // Only change code below this line
    if (n <= 0) {
        return 0;
    } else {
        return sum(arr, n - 1) + arr[n - 1];
    }
}
// Only change code above this line




//task 106
// Setup
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    // Only change code below this line
    for (let x = 0; x < contacts.length; x++) {
        if(contacts[x].firstName === name) {
            if(contacts[x].hasOwnProperty(prop)) {
                return contacts[x][prop];
            } else {
                return "No such property";
            }
        }
    }
    return "No such contact";
    // Only change code above this line
}

lookUpProfile("Akira", "likes");



//task 107
function randomFraction() {

    // Only change code below this line
    let result = 0;
    while(result === 0){
        result = Math.random(0);
    }
    return result;

    // Only change code above this line
}

//task 108
function randomWholeNum() {

    // Only change code below this line

    return Math.floor(Math.random() * 10);
}

//task 109
function randomRange(myMin, myMax) {
    // Only change code below this line
    Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    return 0;
    // Only change code above this line
}

//task 110
function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;

    // Only change code above this line
}