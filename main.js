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
