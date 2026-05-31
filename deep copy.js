function deepClone(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }

    let clone = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        clone[key] = deepClone(obj[key]);
    }

    return clone;
}

const user = {
    name: "John",
    address: {
        city: "Delhi"
    }
};

const copy = deepClone(user);

copy.address.city = "Mumbai";

console.log(user.address.city); // Delhi
console.log(copy.address.city); // Mumbai