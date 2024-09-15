function calculateArea() {
    // the + operator is often used as a shorthand for converting strings
    // to numbers in JavaScript. It can be used in place of parseFloat()
    // or parseInt() in certain situations.
    var length = +document.getElementById("length").value
    var width = +document.getElementById("width").value

    var area = length * width;

    // The backticks and ${} notation allow for the inclusion of JavaScript variables within a string (using template literals).
    // document.getElementById("result").innerText = "The area of the rectangle is: " + area
    document.getElementById("result").innerText = `The area of the rectangle is: ${area}`;

}
