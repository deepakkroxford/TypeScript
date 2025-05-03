var individual = {
    name: "John",
    age: 30,
    greet: function () {
        console.log("Hello, my name is " + this.name);
    }
};
console.log(individual.name); // Output: John
console.log(individual.age); // Output: 30'
// console.log(individual.car); // In typescript this will give an error
individual.greet(); // Output: Hello, my name is John
// first we define the type of object and then we assign the value to it
// this is called type annotation
// first way to do that 
var Man = {
    name: "John",
    age: 30,
    salary: 50000,
    place: {
        city: "New York",
        country: "USA"
    }
};
// second way to do that 
// Man={
//     name: "John",
//     age: 30,
//     salary: 50000,
//     place: {
//         city: "New York",
//         country: "USA",
//     }
// }
console.log(Man);
var car;
car = {
    name: "Toyota",
    model: "Camry",
    year: 2020,
    place: {
        city: "Los Angeles",
        country: "USA"
    }
};
console.log(car["name"]); // Output: Toyota
console.log(car["model"]); // Output: Camry
console.log(car["year"]); // Output: 2020
console.log(car["place"]); // Output: { city: 'Los Angeles', country: 'USA' }
console.log(car["color"]); // Output: undefined not error
// array of object
var people;
people =
    {
        id: 1,
        name: "Deepak Kumar Singh",
        age: 30,
        skills: ["JavaScript", "TypeScript"]
    };
people.id = 2;
console.log(people.id); // Output: 2
console.log(people.name); // Output: John
console.log(people.age); // Output: 30
console.log(people.skills); // Output: [ 'JavaScript', 'TypeScript' ]
