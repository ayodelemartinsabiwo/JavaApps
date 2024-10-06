const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink', 'red', 'blue', 'green', 'purple', 'orange', 'pink'];
let cards = shuffle(colors.concat(colors));
// console.log(cards);
let selectedCards = [];
let score = 0;
let timeLeft = 30;
let gameInterval;

const startbtn = document.getElementById('startbtn');
const gameContainer = document.getElementById('game-container');
const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');

function generateCards() {
    for (const color of cards) {
        //For each color in the 'cards' array: Inside the loop, it creates a new HTML div element
        //This 'div' element represents a card in the game.
        const card = document.createElement('div');
        //add a class 'card' to the newly created 'div' element. Class card is a premade css list class style in css file.
        card.classList.add('card');
        //Sets the 'dataset.color' attribute of the card element to the current color value from the 'cards' array. This icon represents the card's hidden color until the player clicks it.
        card.dataset.color = color;
        // text content of each card is initially set
        card.textContent = '?';
        //Newly created card element is attached as a child. This action adds each card element to the game interface within 'game-container' .
        gameContainer.appendChild(card);
    }
}


function shuffle(array) {
    //Iterates backward through the array starting from the last index
    for (let i = array.length - 1; i > 0; i--) {
        //generates a random index 'j'. This 'j' represents a random index within the array.
        //Math.random() generates a number between 0 (inclusive) and 1 (exclusive)
        //Multiplying by (i + 1) scales this to a number between 0 and i + 1 (exclusive)
        const j = Math.floor(Math.random() * (i + 1));
        //swaps the elements at the 'i' and 'j' indices using array destructuring assignment:
        //This line efficiently swaps the values at positions 'i' and 'j' without requiring a temporary variable.
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function handleCardClick(event) {
    //retrieves the element that triggered the event (in this case, a clicked card) and assigns it to the 'card' variable.
    const card = event.target;
    //If the element is not a card or has already matched, the function returns early, ignoring any further actions for this particular click.
    if(!card.classList.contains('card') || card.classList.contains('matched')) {
        return;
    }

    //This action reveals the card's color by changing the text content to the color value.
    card.textContent = card.dataset.color;

    //Changes the card's background color to match the revealed color.
    card.style.backgroundColor = card.dataset.color;

    //Adds the clicked card to the 'selectedCards' array, indicating that it's one of the cards currently chosen by the player.
    selectedCards.push(card)

    // Checks if two cards have been selected. If two cards have been chosen, it uses 'setTimeout()'
    //to delay the execution of the 'checkMatch()' function by 500 milliseconds.
    // This brief delay allows the player to see both selected cards before their comparison briefly.
    if(selectedCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}


function checkMatch() {
    //Use array destructuring to assign the first two elements of the 'selectedCards' array to 'card1' and 'card2'.
    //These variables represent the two cards selected by the player for comparison.
    const [card1, card2] = selectedCards;

    //Checks if the color value stored in the 'dataset.color' attribute of 'card1' matches the color value of 'card2'.
    if (card1.dataset.color === card2.dataset.color) {
        //If the colors match: It adds the class 'matched' to both cards
        card1.classList.add('matched');
        card2.classList.add('matched');
        //Increases the 'score' by 2 points, as the player successfully matched a pair.
        score += 2;

        //Updates the 'scoreElement.textContent' to display the updated score to the player.
        scoreElement.textContent = `Score: ${score}`;
    } else {
            //If the colors of the two selected cards don't match, it resets the text content of both cards to a question mark ('?'), hiding their colors again.
            card1.textContent = '?';
            card2.textContent = '?';
            //Sets the background color of both cards to a default color ('#ddd'), providing a visual cue that the selected cards didn't match.
            card1.style.backgroundColor = '#ddd';
            card2.style.backgroundColor = '#ddd';
    }

    //Clear the 'selectedCards' array to reset it for the next set of card selections. This action ensures the player can select two new cards after the comparison.
    selectedCards = [];
}


function startGame() {
    //Initializes the 'timeLeft' variable to 30 seconds, setting the duration for the game
    let timeLeft = 30;
    //Disables the 'startbtn' button to prevent multiple game initiations simultaneously, ensuring one game is in progress at a time.
    startbtn.disabled = true;
    //Resets the 'score' variable to zero, initializing it for the new game.
    score = 0;
    //Updates the displayed score to show.
    scoreElement.textContent = `Score: ${score}`;
    //Initiates the game timer, counting down from the specified 'timeLeft' duration.
    startGameTimer(timeLeft);
    //Shuffles the 'colors' array and duplicates it to create pairs for the game cards.
    cards = shuffle(colors.concat(colors));
    //Clear the 'selectedCards' array to prepare for new card selections in the upcoming game.
    selectedCards = [];

    //Clears the game container, removing any existing cards from previous games.
    gameContainer.innerHTML = '';
    //Generates a new set of cards within the game container by calling the 'generateCards()' function, creating a fresh game layout for the player.
    generateCards();

    //Enabling card clicks and triggering the 'handleCardClick()' function to manage the gameplay when cards are clicked.
    gameContainer.addEventListener('click', handleCardClick);

}

function startGameTimer(timeLeft) {
    timerElement.textContent = `Time Left: ${timeLeft}`;
    gameInterval = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time Left: ${timeLeft}`;

        if(timeLeft === 0) {
            clearInterval(gameInterval);
            let timeLeft = 30;
            alert('Game Over');
            startbtn.disabled = false;
        }
    }, 1000);
}


startbtn.addEventListener('click', startGame);
