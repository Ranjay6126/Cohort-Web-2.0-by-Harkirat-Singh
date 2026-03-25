BLOCK SCOPED: defined by  { } ;  // also know as Compount Statement 
//group // 

All the variable and function asccess inside this block {} ;


What ? Shadowing in JavaScript ><?  

Same name variable outside the scope that(globle scope), that is called shadowing… 
Var a = 10; 
{
Var a =23;
}
Console.log(a);
2nd variable shadow the first variable ….modify the value  = ans => 23;
This is only case with var not with let….

-------------------------------------------------------------------------------------------------


Closures: 

Function along bind with its Lexi call scope form a closures….

function x() {
    var a = 7;

    function y() {
        console.log(a);
    }

    y();                 // calling inner function
}

x();                 // calling outer function

Output: 7

Uses of Closures:
— Module Design Patter
-- Currying
— Functions like once
— memoize
---maintaining state in async world
---setTimeouts
— Iterators
and many more...


Function can be also assign in the variable…
--
Var b = 8;
Var a = function y(){
Console.log(b);
};



>>we can pass the function inside the function as argument beautiy of js
>>even we can return the function of function //give us the function y;


function x(){
    var a =7;
    function y(){            // return function y(){…..
        console.log(a);
    }
    return y;   
}
var z = x();
console.log(z);

//......
z();

//output :
ƒ y(){
        console.log(a);
    }
Closure.js:6 
7





function x(){
    var a =7;
    function y(){
        console.log(a);
    }
    a = 100; 
    
    return y;   
}
var z = x();
console.log(z);
//......
z();

Now same : 100

 - -- -- -- -- --- --- -one more level up -- - --- --- - - - -- - - - -

Access the parent to parent variable , even it is clouures…


function z() {
  var a = 700;
  function x() {
    var a = 7;
    function y() {
      console.log(a);
    }
    y();
  }
  x();
}
z();

// 7


… when they return from the another function then, they still maintain the lexical scope


-------------------------------SetTime Out + Closures---------------------------

Function x(){             /// funciton form cloure……….
 var i=7;
setTimeout(function () {
Console.log(i);
}, 4000);
Console.log("Namaste js");      // it print first and give the output and after 4sec I value will print , js not wait for any one
}
x();

//Namaste js 
7 after 4000second


---------------output: =>  it because of it take some time i*1000 sec so, that we getting the value, 6 at the end … not getting 1,2,3…..(it it printing but inside) after that time completed

// in case of var it will print 6 6 66 6



------------------------------------------ just change in place of var let ------------different oupt as above ; because of blocked scope…..


function x() {
  for (let i = 1; i <= 5; i++) {

    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log("Namaste js")

}
x(); 


OUPUTP:=> Namaste js
1
2
3
4
5
.
.
.

Same as above I var case………….


function attachEventListeners() {
  let count = 0;

  document.getElementById("clickMe").addEventListener("click", function () {
    count++;
    console.log("Button Clicked", count);
  });
}

attachEventListeners();