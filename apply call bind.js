const person = {
    name: "Ranjay"
};

function greet(city, country) {
    console.log(
        `${this.name} from ${city}, ${country}`
    );
}

greet.call(person, "Bangalore", "India");

greet.apply(person, ["Delhi", "India"]);

const newFunc = greet.bind(person);
newFunc("Mumbai", "India");