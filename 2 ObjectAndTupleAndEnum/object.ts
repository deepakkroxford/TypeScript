const individual = {
    name: "John",
    age: 30,
    greet: function () {
        console.log("Hello, my name is " + this.name);
    }
}


console.log(individual.name); // Output: John
console.log(individual.age); // Output: 30'
// console.log(individual.car); // In typescript this will give an error
individual.greet(); // Output: Hello, my name is John




// first we define the type of object and then we assign the value to it
// this is called type annotation

// first way to do that 
let Man: {
    name: string;
    age: number;
    salary: number;
    place: {
        city: string;
        country: string;
    }
} = {
    name: "John",
    age: 30,
    salary: 50000,
    place: {
        city: "New York",
        country: "USA"
    }
}


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


let car :{
    name: string;
    model: string;
    year: number;
    color?: string;
    place:{
        city: string;
        country: string;
    }
}

car = {
    name: "Toyota",
    model: "Camry",
    year: 2020,
    place: {
        city: "Los Angeles",
        country: "USA"
    }
}

console.log(car["name"]); // Output: Toyota
console.log(car["model"]); // Output: Camry
console.log(car["year"]); // Output: 2020
console.log(car["place"]); // Output: { city: 'Los Angeles', country: 'USA' }
console.log(car["color"]); // Output: undefined not error




// array of object

let people:{
    readonly id: number;
    name: string;
    age: number;
    skills: string[];
}

people=
    {
        id: 1,
        name: "Deepak Kumar Singh",
        age: 30,
        skills: ["JavaScript", "TypeScript"]
    }

   // people.id = 2; // Error: Cannot assign to 'id' because it is a read-only property

console.log(people.id); // Output: 2 but if we want no one can change the id then we can use readonly
console.log(people.name); // Output: John
console.log(people.age); // Output: 30
console.log(people.skills); // Output: [ 'JavaScript', 'TypeScript' ]


let peopleArray: {
    readonly id: number;
    name: string;
    age: number;
    skills: string[];
}[]; // Array of objects


peopleArray = [
    {
        id: 1,
        name: "Deepak Kumar Singh",
        age: 30,
        skills: ["JavaScript", "TypeScript"]
    },
    {
        id: 2,
        name: "John Doe",
        age: 25,
        skills: ["Python", "Django"]
    }
]