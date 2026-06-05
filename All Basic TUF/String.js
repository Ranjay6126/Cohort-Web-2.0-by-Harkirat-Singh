const name = " prabhash"

const last = " Yadav ";

const age = 23;

// console.log(name + last + age); 

// templet litteral 

console.log(`Hello!, My name is${name.toUpperCase()}${last}and Age is ${age}`);

console.log(typeof name);

// Another ways to declear the String  // this is object 

const gameName = new String("Ranjay");

console.log(typeof gameName);
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('R'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-4, 4);
console.log(anotherString); 

const newStringOne = "    DAD    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://ranjaybabu.com/ranjay%20prajapati";

console.log(url.replace('%20','_'));

// convert string into the array//

console.log(gameName.split(" "));

console.log(gameName.slice(0, 6));

console.log(url.includes('ranjay'));