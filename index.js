var x = 1;

console.log(x);

function a(){
    var x = 10;
    console.log(x);
}
function b(){
    var x = 100;
    console.log(x)
}
a();
b();
……………………………………
1
10
100



Window => Big object with a lot Function and Method… also create this key words… when Glogle Exexution create alog with this is created  this,
This === window
//hosting//



Scope in js is  directly related to Lexical Environment : …………………..><


function a(){
    console.log(b);
}
var b=10;
a();            // output: 10


//  Var b is lies in Globle scope so can be asscess in inside the function and in nested function




function a(){
    c();
    function c(){
         console.log(b);
    }
}
var b=10;           
a();          // 10

SCOPE ? => scope means where you can access à specific Variable or function in our code
