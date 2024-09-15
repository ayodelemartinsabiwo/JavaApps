/**
 * In this task you need to create a function called groceryTracker
 * to calculate the total amount of the purchased grocery item. For this:

Include the following in the HTML File:

You need to create at least three input boxes with ID named as "grocery1"
and so on.
Also Label them using <label> as "Enter first grocery amount" and so on.
Create a button that calculates the total expenditure on the grocery purchases.
Include the following in the JavaScript file:

Create a function which will accept these amount entered by users as a parameter.
Then write the logic to calculate the total amount spent on the grocery purchase.
Call this function in such a way so that after clicking on the button,
it shows the total amount for the grocery purchase.

 */


function groceryTracker(grocery1, grocery2, grocery3) {
    //Let is not used to define the variables bcus they are already declared as parameters
    grocery1 = +document.getElementById(grocery1).value;
    grocery2 = +document.getElementById(grocery2).value;
    grocery3 = +document.getElementById(grocery3).value;

    let totalGrocery = grocery1 + grocery2 + grocery3
    document.getElementById("result").innerHTML = `Your Total Grocery is: $${totalGrocery}\nThank You for shopping with Us!`;
}
