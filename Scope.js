let globalVar = "Global";

function outer() {
    let outerVar = "Outer";

    function inner() {
        let innerVar = "Inner";

        console.log(globalVar);
        console.log(outerVar);
        console.log(innerVar);
    }

    inner();
}

outer();