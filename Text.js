
// index.js

// Function to print user details
function printUserDetails(user) {
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`Email: ${user.email}`);
}

// Example user object
const user = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com"
};

// Call the function with the user object
printUserDetails(user);