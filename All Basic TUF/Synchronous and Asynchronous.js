//synchronous

console.log("start");
for(let i=0; i<=3; i++){
    console.log(`process${i}`);
}
console.log("End");

// Asynchronous 
console.log("----------------------------------------------")

console.log("start");
setTimeout(()=>{

    console.log("I will not wait for 2000 milli second // will not blocked the execuation of code ");
},2000)
console.log("End");


console.log("-----------------------------------------")
//promise

// const fetchData = new Promise((resolve, reject)=>{
//     let success = true;
//     setTimeout(()=>{
//         if(success){
//             resolve("Data fetched successfull");
//         } else{
//             reject("Data fail to fetched");
//         }

//     },4000);
// });
// fetchData
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.error(error);
// });


const fetchData = new Promise((resolve, reject) => {             
  let success = false; // Simulating success or failure
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

  // hosting 

  console.log(name)
  var name = "ranjay";
  
  