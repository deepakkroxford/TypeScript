function combine(a, b) {
    var result;
    if (typeof a === "number" && typeof b === "number") {
        result = a + b;
    }
    else {
        result = a.toString() + b.toString();
    }
    return result;
}
var combinedAges = combine(30, 26);
var combinedNames = combine("Deepak", "Kumar");
console.log(combinedAges); // Output: 56
console.log(combinedNames); // Output: DeepakKumar
