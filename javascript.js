"Everything in JavaScript happens inside an Execution Context"

"JavaScript is a synchronous (in specific order, when 1st line code get finished then Next ),  single-threaded (one line at the time) language"


getName();  // it will print "Nameste Js"

console.log(x);// in case of Var it print undefined

console.log(getName);// it will print whole function

var x = 23;
function getName(){
    console.log("Namaste JavaScript");
}

Hosting.js:2 Uncaught TypeError: getName is not a function

getName(); // IN case of Arrow function , It behave just like variable but not funciton // it define undefined in GEC
var getName =()=>{
    console.log("Hello Sab badhiya");
}

//How function Behave in the js

var x = 1;
a();
b();
console.log(x);

function a(){
    var x = 10;
    console.log(x);
}
function b(){
    var x = 100;
    console.log(x)
}
