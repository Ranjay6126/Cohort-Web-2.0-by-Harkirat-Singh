// ===============================
// 1. Function Declaration
// ===============================
function greet() {
    console.log("Hello, World!");
}
greet();


// ===============================
// 2. Function with Parameters
// ===============================
function greetUser(name) {
    console.log("Hello " + name);
}
greetUser("Dhanush");


// ===============================
// 3. Function with Return Value
// ===============================
function add(a, b) {
    return a + b;
}
console.log(add(5, 3));


// ===============================
// 4. Function Expression
// ===============================
const multiply = function(a, b) {
    return a * b;
};
console.log(multiply(4, 5));


// ===============================
// 5. Arrow Function
// ===============================
const subtract = (a, b) => {
    return a - b;
};

// Short arrow function
const square = x => x * x;

console.log(subtract(10, 5));
console.log(square(6));


// ===============================
// 6. Default Parameters
// ===============================
function greetDefault(name = "Guest") {
    console.log("Hello " + name);
}
greetDefault();


// ===============================
// 7. Rest Parameters
// ===============================
function sumAll(...numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}
console.log(sumAll(1, 2, 3, 4));


// ===============================
// 8. Callback Function
// ===============================
function processUser(name, callback) {
    console.log("Processing " + name);
    callback();
}

function done() {
    console.log("Done!");
}

processUser("Dhanush", done);


// ===============================
// 9. Anonymous Function
// ===============================
setTimeout(function() {
    console.log("Executed after 2 seconds");
}, 2000);


// ===============================
// 10. IIFE (Immediately Invoked Function)
// ===============================
(function() {
    console.log("I run instantly!");
})();


// ===============================
// 11. Recursive Function
// ===============================
function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(5));


// ===============================
// 12. Higher-Order Function
// ===============================
function calculator(a, b, operation) {
    return operation(a, b);
}

const addFunc = (x, y) => x + y;

console.log(calculator(5, 3, addFunc));


// ===============================
// 13. Constructor Function
// ===============================
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const user1 = new Person("Dhanush", 22);
console.log(user1);


// ===============================
// 14. Generator Function
// ===============================
function* generateNumbers() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generateNumbers();
console.log(gen.next().value);
console.log(gen.next().value);


// ===============================
// 15. Async Function
// ===============================
async function fetchData() {
    return "Data received";
}

fetchData().then(data => console.log(data));


// ===============================
// 16. Closure
// ===============================
function outer() {
    let count = 0;

    return function inner() {
        count++;
        console.log(count);
    };
}

const counter = outer();
counter();
counter();


// ===============================
// 17. Object Method
// ===============================
const user = {
    name: "Dhanush",
    greet: function() {
        console.log("Hello " + this.name);
    }
};

user.greet();