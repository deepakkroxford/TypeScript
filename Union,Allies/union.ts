
function combine(a:number|string,b:number|string){
    let result;
    if(typeof a === "number" && typeof b === "number"){
        result = a + b;
    }else{
        result = a.toString() + b.toString();
    }
    return result;
}
let combinedAges = combine(30, 26);
let combinedNames = combine("Deepak", "Kumar");

console.log(combinedAges); // Output: 56
console.log(combinedNames); // Output: DeepakKumar