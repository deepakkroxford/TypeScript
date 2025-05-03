// here we can define the type of a and b as number
// and we can also define the type of the return value of the function
// this is called type annotation
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function concatination(a, b) {
    return a + b;
}
var a = 32; // now here we can not assign a "32" string beacuse we have defined the type of a as number in a function add 
var b = 3;
var sum = add(a, b);
var difference = subtract(a, b);
var str1 = "Hello";
var str2 = "World";
var concatenatedString = concatination(str1, str2);
console.log("The concatenated string is ".concat(concatenatedString));
console.log("The sum of ".concat(a, " and ").concat(b, " is ").concat(sum));
console.log("The difference of ".concat(a, " and ").concat(b, " is ").concat(difference));
// let understand the any type
var data;
// any type can hold any value and we can change the type of data at any time
data = "hello"; // string
data = 123; // number
data = true; // boolean
data = { a: 1 }; // object
data = [1, 2]; // array
data = function () { }; // function
console.log(data); // Output: [Function: data]
// Let's understand the unknown type
var unknownData;
// ✅ unknown can hold any value — just like 'any'
unknownData = "hello"; // string
unknownData = 123; // number
unknownData = true; // boolean
unknownData = { a: 1 }; // object
unknownData = [1, 2]; // array
unknownData = function () { }; // function
// ❌ BUT: we cannot use it like a known type without type checking
// console.log(unknownData.toUpperCase()); // ❌ Error: Object is of type 'unknown'
// ✅ Type narrowing is required before use
if (typeof unknownData === "string") {
    console.log(unknownData.toUpperCase()); // ✅ Safe
}
// ❌ We cannot directly assign unknown to a more specific type
// let str: string = unknownData; // ❌ Error: Type 'unknown' is not assignable to type 'string'
// ✅ But we can assign known types to 'unknown'
var anotherUnknown = "hello";
var num = 5;
// anotherUnknown = num; // ✅ Allowed
console.log(unknownData); // Output depends on last assigned value
var x = "hello";
// console.log(data.toUpperCase()); ❌ Error: You must check type first
if (typeof x === "string") {
    console.log(x.toUpperCase()); // ✅ Now it's safe
}
