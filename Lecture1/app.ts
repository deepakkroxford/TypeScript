
// here we can define the type of a and b as number
// and we can also define the type of the return value of the function
// this is called type annotation
function add(a: number, b: number): number {
    return a + b;
}

function subtract(a:number ,b:number):number{
    return a - b;
}


function concatination(a:string ,b:string):string{
    return a + b;
}
const a = 32; // now here we can not assign a "32" string beacuse we have defined the type of a as number in a function add 
const b = 3;
const sum = add(a, b);
const difference = subtract(a, b);
const str1 = "Hello";
const str2 = "World";
const concatenatedString = concatination(str1, str2);
console.log(`The concatenated string is ${concatenatedString}`);
console.log(`The sum of ${a} and ${b} is ${sum}`);
console.log(`The difference of ${a} and ${b} is ${difference}`);



// let understand the any type

let data: any;
// any type can hold any value and we can change the type of data at any time
data = "hello";   // string
data = 123;       // number
data = true;      // boolean
data = { a: 1 };  // object
data = [1, 2];    // array
data = () => {};  // function

console.log(data); // Output: [Function: data]


// Let's understand the unknown type
let unknownData: unknown;

// ✅ unknown can hold any value — just like 'any'
unknownData = "hello";   // string
unknownData = 123;       // number
unknownData = true;      // boolean
unknownData = { a: 1 };  // object
unknownData = [1, 2];    // array
unknownData = () => {};  // function

// ❌ BUT: we cannot use it like a known type without type checking
// console.log(unknownData.toUpperCase()); // ❌ Error: Object is of type 'unknown'

// ✅ Type narrowing is required before use
if (typeof unknownData === "string") {
  console.log(unknownData.toUpperCase()); // ✅ Safe
}

// ❌ We cannot directly assign unknown to a more specific type
// let str: string = unknownData; // ❌ Error: Type 'unknown' is not assignable to type 'string'

// ✅ But we can assign known types to 'unknown'
let anotherUnknown: unknown = "hello";
let num: number = 5;
// anotherUnknown = num; // ✅ Allowed

console.log(unknownData); // Output depends on last assigned value

let x: unknown = "hello";
// console.log(data.toUpperCase()); ❌ Error: You must check type first

if (typeof x === "string") {
  console.log(x.toUpperCase()); // ✅ Now it's safe
}