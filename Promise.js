const promise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Success");
    } else {
        reject("Failed");
    }
});

promise
    .then(res => console.log(res))
    .catch(err => console.log(err));