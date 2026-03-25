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





/*


//The ways of finding variable inside parent lexical environment is known as Scope Chain.


_______________let & const __________________________

console.log(test);   // Reference error // Can't access 'a' before intialization
let test = 12;

Console.log(a);
Let a = 10; //       In Script in sepreated spaced is define as undefined
Can't be Redeclear the value ;

 If we do now let  a = 20;     Then Error is we get is SyntaxError…..
Let a …… can be re insitiallized letter on…

Var b = 23;
Var b = 20;  no error, 

In case with rediclear: =>  let a;
a =23; can be resinge it value later on….
                 - - - - - -- -- - -- - - -- - - - -- - - -- - - - - - -- -- - -- ------- - --- -- - -- -- 

Var b = 45;   //   in global : b is undefined  // b is attached to Window
Can be Redeclear like b = 590;


Temproal Dead Zone : TDZ is Time since when let variable is hosted till it initial it value.

If we try to console.log(x) => Reference Error ; X is not defined 

_ __ _ __ _ __ _ __ _ _ _ __ _ _ __ __ __ __ _ __ 
Const : it is even more strick then let 
We can't Redeclear  & intiallized it ….

Const b;   // syntext error 
Const b;
Const b= 100;  type Error // means need to assigen the value in the same line

sobo();
console.log(num);

var num = 34;

function sobo(){
    console.log("Hello Namshate js");
}

• function → hoisted completely ✅
• var → hoisted but initialized with undefined ⚠️
let / const → hoisted but not initialized (TDZ error) ❌*/