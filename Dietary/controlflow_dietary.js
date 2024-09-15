/**Practice task
Suppose an organization arranges a "Dietary Services" program to provide diets
to its employees and customers, based on a person's weight and day-to-day routine.
You need to create an authorization-based code to provide access to people based
on their roles in organization, such as employees, enrolled members for "Dietary
Services," and subscribers.

If the person is an Employee, they are authorized to have access to "Dietary Services".

If the person is an Enrolled Member, they are authorized to have access to "Dietary Services"
and one-on-one interaction with a dietician.

If the person is a Subscriber, they are authorized to have partial access to facilitate "Dietary Services" only.

If the person is a Non-Subscriber, they need to enroll or at least subscribe first to avail this facility.

You need to communicate with the user by printing a message indicating whether that person is eligible to
avail which type of services.


## Summary
Using conditional statements and control flow, you can direct how a program behaves based on different situations or criteria, allowing for decision-making and defining specific pathways within the code.
Variables declaration:

Set up a HTML file linked to a JavaScript file in a folder named "controlFlow."
Create variables for userRole, accessLevel, isLoggedIn, userMessage, userType, userCategory, isAuthenticated, and authenticationStatus.
Implementing control flow:

Use if…else statements to assign access levels based on user roles.
Implement nested if…else statements to customize messages based on login status and user roles.
Utilize a switch statement to categorize users based on their type.
Ternary operator for authentication:

Use a ternary operator to determine the authentication status.
Depending on the value of isAuthenticated, set the authenticationStatus as "Authenticated" or "Not authenticated."
*/



// Variables declaration
let userRole = "Employee"; // Possible values: 'Employee', 'Enrolled Member', 'Subscriber', 'Non-Subscriber'
let accessLevel = "";
let isLoggedIn = true;
let userMessage = "";
let userType = "Non-Member"; // Categories: 'Member', 'Non-Member', 'Visitor'
let userCategory = "";
let isAuthenticated = true;
let authenticationStatus = "";

// Control flow for access levels
if (userRole === "Employee") {
    accessLevel = "full access to Dietary Services";
} else if (userRole === "Enrolled Member") {
    accessLevel = "full access to Dietary Services and one-on-one interaction with a dietician";
} else if (userRole === "Subscriber") {
    accessLevel = "partial access to Dietary Services";
} else {
    accessLevel = "no access. Please enroll or subscribe to avail the services.";
}

// Nested if...else for login status
if (isLoggedIn) {
    userMessage = `You are logged in as a ${userRole}. You have ${accessLevel}.`;
} else {
    userMessage = "Please log in to view your access level.";
}

// Categorizing users using switch statement
switch (userType) {
    case "Member":
        userCategory = "You are a registered member.";
        break;
    case "Non-Member":
        userCategory = "You are not a registered member.";
        break;
    case "Visitor":
        userCategory = "You are a visitor. Consider subscribing for more access.";
        break;
    default:
        userCategory = "User type is undefined.";
}

// Ternary operator for authentication status
authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

// Displaying the messages on browser
let messageElement = document.getElementById('message');
messageElement.textContent = `${userMessage} ${userCategory} Authentication status: ${authenticationStatus}.`;

//Code line to output on the browser console
// messageElement = `${userMessage} ${userCategory} Authentication status: ${authenticationStatus}.`;
// console.log(messageElement)
