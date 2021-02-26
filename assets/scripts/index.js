//These functions when loading the page prepare the initial setup
hideButton();
resetValueInputField()
window.onload = function(){
    game_mode.reset();
}

var cardsDeck;
var randomCardsHand;
var userCardsHand;
var textScore;

//This function is invoked by the user pressing the key. 
//Sets up the screen to display random card combinations.
//Generate a 52-card deck, shuffle it, and subtract the top five cards from it, 
//and print the number of remaining cards.
//The hand of cards is printed on the screen, on the console, 
//is analyzed and the score is printed
function displayRandomCards() {
    resetValueInputField();
    resetPrintingScreen()
    document.getElementById("btn_user_cards").setAttribute("class", "display_none")
    document.getElementById("btn_random_cards").setAttribute("class", "display_block red")
    cardsDeck = getPokerDeck();
    printingCardsConsole(cardsDeck);
    shuffle(cardsDeck);
    printingCardsConsole(cardsDeck);
    randomCardsHand = cardsDeck.splice(0, 5);
    randomCardsInInputField(randomCardsHand);
    printingCardsConsole(randomCardsHand);
    printingCounter(cardsDeck);
    printingCardsConsole(cardsDeck);
    textScore = evaluateCardsHand(randomCardsHand);
    printingScreen(textScore);
    console.log(textScore);
    console.log(getCardsValues(randomCardsHand));
    console.log("-----------------------");
}

//This function is invoked by the user pressing the key.
//This function takes 5 cards from the deck until there are fewer than 5 left.
//When the deck is finished, on a further press, the deck is reset.
//The cards are sold printed on the screen and on the console, 
//they are analyzed and the result printed on the screen.
function startRandom() {
    switch (cardsDeck.length > 5) {
        case true:
            randomCardsHand = cardsDeck.splice(0, 5);
            randomCardsInInputField(randomCardsHand);
            printingCounter(cardsDeck);
            printingCardsConsole(randomCardsHand);
            printingCardsConsole(cardsDeck);
            textScore = evaluateCardsHand(randomCardsHand);
            printingScreen(textScore);
            console.log(textScore);
            console.log(getCardsValues(randomCardsHand));
            console.log("-----------------------");
            break;
        case false:
            displayRandomCards()
    }
}

//This function is invoked by the user pressing the key. 
//Sets up the screen to display user card combinations.
function displayYourCards() {
    resetValueInputField();
    resetPrintingScreen();
    resetPrintingCounter()
    document.getElementById("btn_user_cards").setAttribute("class", "display_block red")
    document.getElementById("btn_random_cards").setAttribute("class", "display_none")
}

//This function is invoked by the user pressing the key.
//This function analyzes the hand of cards chosen by the user, 
//analyzes it and returns the score
function startUserInput() {
    userCardsHand = getUserCardsHand()
    printingCardsConsole(userCardsHand);
    console.log(userCardsHand);
    textScore = evaluateCardsHand(userCardsHand);
    printingScreen(textScore);
    console.log(textScore);
    console.log(getCardsValues(userCardsHand));
    console.log("----------------------");
}

//This function hides the buttons that are not needed in the initial setup
function hideButton() {
    document.getElementById("btn_user_cards").setAttribute("class", "display_none")
    document.getElementById("btn_random_cards").setAttribute("class", "display_none")
}
