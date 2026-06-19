const user = {
    name: "Ranjay"
};

const proxyUser = new Proxy(user, {
    get(target, prop) {
        console.log(`Accessing ${prop}`);
        return target[prop];
    }
});

console.log(proxyUser.name);