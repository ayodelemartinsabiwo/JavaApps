// Create testtext variable with any sentence used for typing.
// Then initialize two variables named startTime and endTime.
let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;
let testDuration = 60; // seconds
let testTimer;

function startTest() {
    // Set the test text
    document.getElementById('inputText').value = testText;

     // Enable user input
     const userInput = document.getElementById('userInput');
     userInput.readOnly = false;
     userInput.value = ""; // Clear any previous input


    // Reset results and timer
    document.getElementById('output').innerHTML = "";
    startTime = new Date().getTime();



    // Change the button's label to "End Test"
    const button = document.getElementById('btn');
    button.innerHTML = 'End Test';    // Update button label
    button.onclick = endTest;

    // Disable the button when the userInput textarea is focused
    userInput.addEventListener('focus', () => {
        userInput.focus();  // Focus on the input area
        button.disabled = true; // Disable button while typing
    });

    // Enable the button when userInput textarea loses focus (if needed)
    userInput.addEventListener('blur', () => {
        button.disabled = false; // Re-enable button after focus is lost
    });

    // Start a countdown timer
    testTimer = setTimeout(endTest, testDuration * 1000);
}



function endTest() {
    // Get the user's typed text first
    var userTypedText = document.getElementById('userInput').value;

    // Check if the text matches the required text
    if (userTypedText !== testText) {
        alert('Type the exact sentence within the text area!');
        return; // Exit early if the text doesn't match
    }

    // Clear the timer to prevent it from running multiple times
    clearTimeout(testTimer);

    const confirmEnd = confirm("Are you sure you want to end the test?");
    if (!confirmEnd) {
        return; // Exit the function if the user cancels
    }

    //Set endtime
    endTime = new Date().getTime();

    // Disable user input
    document.getElementById('userInput').readOnly = true;

    // Calculate time elapsed and words per minute (WPM)
    var timeElapsed = (endTime - startTime)/ 1000; //in seconds
    var userTypedText = document.getElementById('userInput').value;

    // Split the text using regex to count words correctly
    var typedWords = userTypedText.split(/\s+/).filter(function (word) {
                return word !=="";
            }).length;

    //Calculate Words per Minute
    var wpm = 0;

    if ( timeElapsed !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeElapsed) * 60)
    };

    // Display the results
    var outputDiv  = document.getElementById('output');
    outputDiv.innerHTML = "<h2>Typing Test Results:</h2>" +
                "<p>Words Typed: " + typedWords + "</p>" +
                "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
                "<p>Words Per Minute (WPM): " + wpm + "</p>";


    // Reset the button
    var button = document.getElementById('btn');
    button.innerHTML = 'Start Test' // Change button text back to 'Start Test'
    button.onclick = startTest;  // Change onclick handler back to startTest
    wpm = 0;
    // Clear the test text
    document.getElementById('inputText').value = "";
    button.disabled = false;


}
