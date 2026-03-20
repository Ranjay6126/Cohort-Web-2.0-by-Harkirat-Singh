/*1. What is a Closure in JavaScript?Closures: Function along bind with its Lexi call scope form a closures….

Closures allow you to access the outer function's variables from the inner function, even after the outer function is finished executing…...
function main() {

    const name = "Dhanush";
    function sayMyName() {
        console.log(name)
    }
     sayMyName();    // this one is closure  // it will print the Dhanush
}
main();


Lexical Environment :
 local memory along  + with lexical environment of parent ………………………………….
Lexical means (Sequence , in herecay )  : c function seating lexical inside the  function  a 

function a(){
    c();
    function c(){
         console.log(b);
    }
}
var b=10;
a();

---------------------------------------------------------------------------------------------------------------------------------------

. What is JavaScript?
JavaScript is a programming language used to desing  interactive website and webApplication . is to give the functionality and logic to the webpage .JavaScript adds dynamic features like buttons that respond when clicked, animations, dropdown menus, and real-time updates (like showing the current time or live scores). makes a website feel alive and functional, rather than just a static page .  It is single thread even handle asynchronous task….. making them more functional and engaging.

-----------------------------------------------------------------------------------------------------------------------------------------

2. What is a promise in JavaScript?
• A promise is a JavaScript object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. ,
• Promises make it easier to handle asynchronous code, And avoiding "callback hell."
A promise can be in one of three states: 
	• Pending: The operation is still in progress.
	• Fulfilled: The operation completed successfully.
	• Rejected: The operation failed.
Example : a person made pyment ether successful, fail₫, or in process…
CODE :=>
	

const fetchData = new Promise((resolve, reject) => {             
  let success = true; // Simulating success or failure
  setTimeout(() => {
    if (success) {
      resolve("Data fetched successfully!");
    } else {
      reject("Failed to fetch data!");
    }
  }, 2000);
});
fetchData
  .then((data) => {
    console.log(data); // Output: Data fetched successfully!
  })
  .catch((error) => {
    console.error(error); // Output: Failed to fetch data!
  });

Promise Methods
	• .then(): Handles the result of a fulfilled promise.
	• .catch(): Handles the result of a rejected promise.
	• .finally(): Runs after the promise is settled (fulfilled or rejected), regardless of the outcome.


Axios 📨
Axios is a JavaScript library used to make HTTP requests (like GET, POST) to APIs.
👉 Think of it as a messenger that helps your app talk to a server and get/send data.



	1) What is a Closure in JavaScript?
	
	Closures allow us to access the outer function's variables from the inner function, even after the outer function is finished executing…...
	function main() {
	
	    const name = "Dhanush";
	    function sayMyName() {
	        console.log(name)
	    }
	     sayMyName();    // this one is closure  // it will print the Dhanush
	}
main();*/


let firstName = "Ranjaya";

var lastName = "Kumar";

let married = false;

const age = 24;

console.log("His first name is "+ firstName + "and his last name is " + lastName + ".He is age " + age + " and married: " + married);

console.log(`his name is $firstName`);


// Question

let personfirstName = "Dhanush";

let personlastName = "Prajapati";

const greet = "Namaste";

console.log(`Hello, ${personfirstName}  ${personlastName}! ${greet}`);


//2 Question

let gender = "false";

if(gender === "true"){
    console.log("male");
} else{
    console.log("female");
}



// 3 Question 

// counting from 0 to 100 and adding them together


for(let i=0; i<=100; i++){
    console.log(i);
}


//even number in array

let arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i=0; i<arr.length; i++){
    if(arr[i] % 2 === )
}




/*Let's write some code -
1. Write a progrßm prints all the even numbers in an array
2. Write a program to print the biggest number in an arrya
3. Write a program that prints all the male people's first name given a complex object
4. Write a program that reverses all the elements of an array*/ 




/*. How is JavaScript different from Java?
	○ JavaScript is a scripting language, while Java is a compiled language. JavaScript runs directly in the browser, while Java requires a java virtual machine.(JVM).


2. What are JavaScript data types?
Data types represent the kind of value stored:
	• Primitive types: Number, String, Boolean, Undefined, Null, Symbol, BigInt.
	• Non-primitive type: Object., Array , Function  (Reference Types)
DATA TYPES :- Type of data a variable can hold in programming languages.


Common types of datatypes:
Primitive datatypes: They are immutable, meaning their values cannot be changed once assigned. When you assign or pass a primitive type, JavaScript works with the actual value.(Primitive types are Call by Values => means Change in the Copy)


• Number:
	• Represents both integers and floating-point numbers.
	• Example:

let age = 25;
let price = 9.99;
	
• String:
	• Represents a sequence of characters (text).
	• Example:
	let name = "Alice";
	
• Boolean:
	• Represents a logical entity and can have only two values: true or false.


let isValid = true;

• Null:
	• Represents the intentional absence of any object value. It's a primitive type and evaluates to null.
	
	let emptyValue = null;
	
• Undefined:
	• Represents a variable that has been declared but has not yet been assigned a value.
	
	• let x;
console.log(x); // Output: undefined
	
• Symbol (introduced in ES6):
	• Represents a unique identifier. Symbols are guaranteed to be unique, even if they have the same description.
	
	• let sym = Symbol('id');
	
• BigInt (introduced in ES2020):
	• Represents integers with arbitrary precision, allowing you to work with numbers larger than the Number type can safely represent.
	
	let bigNumber = 1234567890123456789012345678901234567890n;
	
	2. Non-Primitive (Reference) Data Types:
	Non-primitive data types (also known as reference types(change in the original values) are objects in JavaScript. They are mutable, meaning their values can be changed after assignment. These types are not stored directly in memory but are accessed via references (pointers) to memory locations.
	Types of Non-Primitive Data Types:
		1. Object:
			○ The most general type of reference data. Objects are collections of key-value pairs where values can be of any type (primitive or non-primitive).
			○ Example:

javascript

let person = {
  name: "Alice",
  age: 25
};
			
		2. Array:
			○ Arrays are special types of objects used to store ordered collections of values (of any type).
			○ Example:

javascript

let numbers = [1, 2, 3, 4];
			
		3. Function:
			○ Functions are objects in JavaScript. They are first-class citizens, meaning they can be assigned to variables, passed as arguments, and returned from other functions.
			○ Example:

javascript

function greet() {
  console.log("Hello!");
}
			○ Greet();
			
		4. Date:
			○ JavaScript has a built-in Date object to handle dates and times.
			Example:

javascript
			let today = new Date();
			
		5. RegExp:
			○ Regular expressions are special objects used for pattern matching in strings.
			○ Example:

javascript
			○ let regex = /hello/i;
	

22. What is NaN?
NaN stands for "Not-a-Number." It's a special value when a mathematical operation fails.
const num = 10;
const str = "hello";

const result = num + str;
console.log(result); // "10hello"

NAN
const num = 10;
const str = "hello";

const result = num + Number(str);
console.log(result); // NaN

let x;
const sum = x + 10;
console.log(sum); // Output: NaN



	3. What is the difference between let, var, and const?
	
		○ var: is Global or function-scoped, but not blocked ,can be redeclared. And Reassigned it Values 
		
		○ let: is Block-scoped, cannot be redeclared. But can be Reassigned the value….
		
		○ const: is Block-scoped, must be initialized, and  // once we declared const through out the program the value remain same
 // cannot be reassigned. And Redeclared……………………….. */




 /*5. What is the difference between == and ===?

>> 
• == (Loose Equality Operator):
Compares two values for equality after converting them to the same type.

🔸 == (Loose Equality )
	• Compares values after converting them to the same type.
	• Performs type coercion if needed.
	• It checks for equality of value, but not necessarily the type.

Example:
5 == '5'     // true (string '5' is converted to number 5)
null == undefined  // true (treated as loosely equal)


• === (Strict Equality Operator):
Compares two values for equality without converting their types (type and value must match).
🔸 === (Strict Equality)
	• Compares both value and data type.
	• No type conversion is done.
	• If types are different, it returns false.
Example:
5 === '5'    // false (number !== string)
……null === undefined  // false (different types)
5 === 5      // true (same type and value

In JavaScript, the difference between == and === is that
 ==  performs type coercion, meaning it converts the values to the same type before comparison.

 On the other hand, === checks both the value and the type, so no type conversion happens.

As a result, == is used with implicit type coercion Implicit conversion happens automatically by JavaScript, without any explicit instruction from the developer, 

, while === is used with explicit type,     
explicit conversion is done manually, with the developer explicitly specifying how the conversion should take place.

-------------------------------------------------------------------------------------------------------------------------

JavaScript Frameworks and Libraries
	1. What is a JavaScript framework?
	• A Set of  pre-written code  that provides a structure for developing  S/W app.  Ex:=> Angular , Express.js


	1. What is a JavaScript library?
	• A collection of pre-written code that can be used to perform specific tasks. EX:=> React, Jquery, Axios

--------------------------------------------------------------------------------------------------------------------------------------

3. What is JSON and how is it used in JavaScript?
• JavaScript Object Notation, a lightweight data-interchange format. It's used to exchange data between a web server and a web page. Data is represented as key-value pairs. Keys must be strings (enclosed in double quotes).
{
  "name": "Dhanush",
  "age": 21,
  "isStudent": true,
  "skills": ["C++", "JavaScript", "SQL"],
  "address": {
    "city": "Kathmandu",
    "country": "Nepal"
  }
}

4. How do you select elements in the DOM?
• Using methods like getElementById(), getElementsByClassName(), and querySelector().

5. Explain the difference between innerHTML and innerText.
• innerHTML replaces the content of an element, including HTML tags.
•  innerText replaces the text content only.

6. How do you create a new element in the DOM?
• Use createElement(), set attributes, and append it to a parent element using appendChild().


7. What is the this keyword in JavaScript?
>>this in JavaScript refers to the object that is currently using or calling the function.
const person = {
  name: "Asha",
  greet: function () {
    console.log("Hello, my name is " + this.name);
  }
};
person.greet(); // "Hello, my name is Asha"

//\\ ______________________________________________||\\

let person = {
  name: "Dhanush",
  greet: () => {
    console.log("Hi, I am " + this.name);
  }
};

person.greet(); // ❌ undefined
🧩 Because arrow functions don’t bind this — here, this refers to the outer/global scope, not person.   



Q))  keywords :=> are reserved words that have a specific meaning and purpose in the language. These cannot be used as variable names, function names, or identifiers.
	○ var, let, const   || if, else, else if || do, for, while || function || Class || 
 */