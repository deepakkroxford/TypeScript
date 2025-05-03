
/*
🔷 What is an enum?

An enum (enumeration) is a way to define a set of named constant values.
It helps make your code more readable and type-safe when dealing with fixed options.

✅ Why use enum?
Instead of writing raw values like "admin", "user", or "guest" everywhere, you can use an enum to group and manage them.


*/

enum Role {
    Admin,    // 0
    User,     // 1
    Guest     // 2
}

const human: {
    name: string;
    age: number;
    role: Role;
} = {
    name: "Deepak",
    age: 0,
    role: Role.Guest
}

if (human.role === Role.Admin) {
    console.log("You are an admin");
} else if (human.role === Role.User) {
    console.log("You are a user");
}
else if (human.role === Role.Guest) {
    console.log("You are a guest");
}



enum Status {
    Success = "SUCCESS",
    Error = "ERROR",
    Loading = "LOADING"
  }
  
  let currentStatus: Status = Status.Success;
  console.log(currentStatus); // Output: SUCCESS