
let count = 0

// function increaseCount() {
//     count++;
//     checkCountVal();
//     displayCount();
// }

function checkCountVal() {
    if (count === 10) {
        alert("You just reached 10 followers milestone. Congratulations!");
    } else if (count === 20) {
        document.body.style.backgroundColor = "black"
        document.body.style.color = "white"
        alert("You just reached 20 followers milestone. Congratulations!");
    }
}

function displayCount() {
    document.getElementById("countDisplay").innerHTML= count;
}

//Add addEventlisterner
// const button = document.getElementById("butt");

// button.addEventListener('click', increaseCount);

//2nd way to use addEventListerner
document.getElementById('butt').addEventListener('click', function() {
    count++;
    checkCountVal();
    displayCount();
});

// Mouseover event
const moveArea = document.getElementById("moveArea");
// const  bodyBrw= document.body;

moveArea.addEventListener('mousemove', function(event) {
    document.getElementById('moveArea').innerText = `Mouse coordinates - X: ${event.clientX}, Y: ${event.clientY}`
    // console.log(`Mouse coordinates - X: ${event.clientX}, Y: ${event.clientY}`);
});


// Mouseover event
const keyInput = document.getElementById("keyInput");
let keyPressCount = 0
keyInput.addEventListener('keydown', function() {
    keyPressCount++;
    document.getElementById('kdata').innerText = `${keyPressCount} "Key Pressed down!"`
    // console.log('Key pressed down!');
});

let keyReleaseCount = 0
keyInput.addEventListener('keyup', function() {
    keyReleaseCount++;
    document.getElementById('kr').innerText = `::${keyReleaseCount} "Key released!"`
    // console.log('Key pressed down!');
});

// Submit event


document.getElementById("myForm").addEventListener('submit', function(event) {
    event.preventDefault() //Prevents the default form submission behavior
    document.getElementById('res').innerText = 'Form submitted!'
    console.log('Submitted');

    document.getElementById('res').style.visibility = 'visible'


});
document.getElementById('res').style.visibility = 'hidden'

document.getElementById('res').addEventListener('click', function(){
    document.getElementById('res').style.visibility = 'hidden'
})



const textInput = document.getElementById('textFocus');
textInput.addEventListener('focus', function() {
  console.log('Input focused');
});
textInput.addEventListener('blur', function() {
  console.log('Input blurred');
});

//When browser window resize
window.addEventListener('resize', function() {
    console.log('Window resized');
  });


//Scroll event : It occurs when ther is the detection of scrolling actions within the document.
  window.addEventListener('scroll', function() {
    console.log('Caught you! Document scrolled..pooyah');
  });
