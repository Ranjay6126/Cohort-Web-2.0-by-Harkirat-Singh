export default User;
import User from "./User.js";

// event delegation

document.getElementById("list")
.addEventListener("click", (e) => {
    if(e.target.tagName === "LI"){
        console.log(e.target.innerText);
    }
});

// Debouncing and throttling 

function debounce(fn, delay){
    let timer;
    return (...args)=>{
        clearTimeout(timer);
        timer = setTimeout(()=>fn(...args), delay);
    };
}