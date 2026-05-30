function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function () {
    console.log(`Hello ${this.name}`);
};

const p1 = new Person("Ranjay");

p1.sayHello();