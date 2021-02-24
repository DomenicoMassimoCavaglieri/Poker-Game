hideButton();
resetValueInputField()

var cardsDeck;
var cardsHand;


function displayRandomCards() {
    resetValueInputField();
    resetPrintingScreen()
    document.getElementById("btn_user_cards").setAttribute("class", "display_none")
    document.getElementById("btn_random_cards").setAttribute("class", "display_block red")
    cardsDeck = getPokerDeck();
    printingDeckConsole(cardsDeck);
    shuffle(cardsDeck);
    printingDeckConsole(cardsDeck);
    cardsHand = cardsDeck.splice(0, 5);
    randomCardsInInputField(cardsHand);
    printingDeckConsole(cardsHand);
    printingCounter(cardsDeck);
    printingDeckConsole(cardsDeck);
    console.log("-----------------------");
    //var randomCardsReadyForEvaluation = cardsHand.map(figuresIntoIntegers).sort((a, b) => a - b);
    //console.log(randomCardsReadyForEvaluation);
    // var textScore = evaluateCardsHand(randomCardsReadyForEvaluation);
    // cardsToEvaluatePrintngConsole(randomCardsReadyForEvaluation, textScore);
    // printingScreen(textScore);
}

function displayYourCards() {
    resetValueInputField();
    resetPrintingScreen();
    document.getElementById("btn_user_cards").setAttribute("class", "display_block red")
    document.getElementById("btn_random_cards").setAttribute("class", "display_none")
}

function startRandom() {
    // var cardsHand = getCardsHand(cardsDeck);
    
    // cardsHandPrintingConsole(cardsHand);
    // figuresIntoIntegers(cardsHand);
    // var randomCardsReadyForEvaluation = cardsHand.sort((a, b) => a[0] - b[0]);
    switch (cardsDeck.length > 5) {
        case true:
            cardsHand = cardsDeck.splice(0, 5);
            randomCardsInInputField(cardsHand);
            printingCounter(cardsDeck);
            printingDeckConsole(cardsHand);
            printingDeckConsole(cardsDeck); 
            console.log("----------------------")
            break;
        case false:
            displayRandomCards()
    }
    
    
    
    
    // var randomCardsReadyForEvaluation = cardsHand.map(figuresIntoIntegers).sort((a, b) => a - b);
    // var textScore = evaluateCardsHand(randomCardsReadyForEvaluation);
    //cardsToEvaluatePrintngConsole(randomCardsReadyForEvaluation, textScore);
    //printingScreen(textScore);
}

function startUserInput() {
    var userCardsHand = getUserCardsHand();
    cardsHandPrintingConsole(userCardsHand);
    cardValueIntoIntegers(userCardsHand);
    var userCardsReadyForEvaluation = userCardsHand.sort((a, b) => a[0] - b[0]);
    var textScore = evaluateCardsHand(userCardsReadyForEvaluation);
    cardsToEvaluatePrintngConsole(userCardsReadyForEvaluation, textScore);
    printingScreen(textScore);
}

function hideButton() {
    document.getElementById("btn_user_cards").setAttribute("class", "display_none")
    document.getElementById("btn_random_cards").setAttribute("class", "display_none")

}

