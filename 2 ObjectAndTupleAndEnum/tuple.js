/**
 *What is a Tuple?
 A tuple is a special type of array where each element can have a different type, and the order of elements matters.
 In normal arrays, all elements must have the same type. But with tuples, you can mix types.
 */
var tuple;
tuple = [1, "hello", true]; // valid tuple
tuple = [2, "world", false]; // valid tuple
console.log(tuple[0]); // Output: 2
console.log(tuple[1]); // Output: world
console.log(tuple[2]); // Output: false
console.log(tuple.length);
// console.log(tuple[3]); // Error: Index signature in type 'tuple' only permits reading
// tuple = [3,4,true]; // invalid tuple, because the first element should be a number and second should be a string
// we can also use type annotation to define the type of tuple
var deepak = [1, "hello", true]; // valid tuple
// use the tuple in the objec
var teacher = {
    name: "deepak",
    age: 30,
    subject: "math",
    hobbies: ["reading", 2]
};
console.log(teacher); // Output: deepak
console.log(teacher.hobbies[1]); // Output: 2
teacher.hobbies[0] = "writing"; // valid
console.log(teacher.hobbies[0]); // Output: reading
