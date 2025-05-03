/*
🔷 What is an enum?

An enum (enumeration) is a way to define a set of named constant values.
It helps make your code more readable and type-safe when dealing with fixed options.

✅ Why use enum?
Instead of writing raw values like "admin", "user", or "guest" everywhere, you can use an enum to group and manage them.


*/
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest"; // 2
})(Role || (Role = {}));
var human = {
    name: "Deepak",
    age: 0,
    role: Role.Guest
};
if (human.role === Role.Admin) {
    console.log("You are an admin");
}
else if (human.role === Role.User) {
    console.log("You are a user");
}
else if (human.role === Role.Guest) {
    console.log("You are a guest");
}
var Status;
(function (Status) {
    Status["Success"] = "SUCCESS";
    Status["Error"] = "ERROR";
    Status["Loading"] = "LOADING";
})(Status || (Status = {}));
var currentStatus = Status.Success;
console.log(currentStatus); // Output: SUCCESS
