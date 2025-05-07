var person = {
    name: "John",
    age: 30,
    greet: function () {
        console.log("Hello, my name is " + this.name);
    }
};
console.log(person.name); // Output: John
console.log(person.age); // Output: 30'
console.log(person.car); //  it will return undefined
person.greet(); // Output: Hello, my name is John
