const fatchData = new Promise((resolve, reject) => {
    let success = false;

    setTimeout(()=>{
        if(success){
        resolve("data is fatched successfully");
        } else{
            reject("Data is not fatched")
        }
    },2000);

});
fatchData
.then((data)=>{
console.log("data");
})
.catch((reject)=>{
    console.log("error");
})

// Closure

function outerfn(){
    let name = "Ranjay";
    function innerfn(){
        console.log(name);
    }
    innerfn();
}
outerfn();