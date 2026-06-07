const score = 400;
console.log(score);

const balance = new Number(300);
console.log(balance);

console.log(balance.toString().length);

console.log(balance.toFixed(2));


const othername = 123.90
console.log(othername.toPrecision(4));

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'));

console.log("-------------------------")

// Math//

console.log(Math); 

console.log(Math.abs(-4)); // absolute value
console.log(Math.round(4.5)); // greater than 5
console.log(Math.round(4.3)); // round of less then 4 and 4 
console.log(Math.ceil(4.1));// always up value
console.log(Math.floor(4.6)); // down value

console.log(Math.min(1,3,5,67));
console.log(Math.max(1,3,5,67));

console.log(Math.random()); // value always come between 0(include) and 1 -not  


console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);