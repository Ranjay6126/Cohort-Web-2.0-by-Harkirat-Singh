/*
Let's write some code -
1. Write a program prints all the even numbers in an array
2. Write a program to print the biggest number in an arrya
3. Write a program that prints all the male people's first name given a complex object
4. Write a program that reverses all the elements of an array
*/

//syntex of Array
const value = [1,2,3];
// aways to access the array
console.log(value[0]);

//object syntex

let user1 = {
    firstname: "Ranjay",
    lastname: "Prajapati",
    gender : "Male"
}

console.log(user1.firstname); 
//other ways to access the object 
console.log(user1["lastname"]);

// array of the object

const alluser =[{
    firstphone: "apple",
    secondphone: "samsung",
    thirdphone: "oneplus"
},
{
    firstphone: "nale",
    secondphone: "samsung",
    thirdphone: "oneplus"
}];

for(let i=0; i<alluser.length; i++){
    console.log(alluser[i].firstphone);
}
