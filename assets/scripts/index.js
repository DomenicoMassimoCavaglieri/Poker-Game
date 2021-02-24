hideButton();
resetValueInputField()

var cardsDeck;
var randomCardsHand;
var userCardsHand;


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
    console.log("-----------------------");
    
    
   
    //console.log(randomCardsReadyForEvaluation);
    // var textScore = evaluaterandomCardsHand(randomCardsReadyForEvaluation);
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
    // var randomCardsHand = getrandomCardsHand(cardsDeck);
    
    // randomCardsHandPrintingConsole(randomCardsHand);
    // getCardsValues(randomCardsHand);
    
    switch (cardsDeck.length > 5) {
        case true:
            randomCardsHand = cardsDeck.splice(0, 5);
            randomCardsInInputField(randomCardsHand);
            printingCounter(cardsDeck);
            printingCardsConsole(randomCardsHand);
            printingCardsConsole(cardsDeck); 
            console.log("----------------------")
            break;
        case false:
            displayRandomCards()
    }
    
    
    
    
    // var textScore = evaluaterandomCardsHand(randomCardsReadyForEvaluation);
    //cardsToEvaluatePrintngConsole(randomCardsReadyForEvaluation, textScore);
    //printingScreen(textScore);
}

function startUserInput() {
    userCardsHand = getUserCardsHand()
    printingCardsConsole(userCardsHand);
    //cardsValuesIntoIntegers(userCardsHand);
    console.log(userCardsHand);
    console.log("----------------------")
    
    var textScore = evaluateCardsHand(userCardsHand);
    // cardsToEvaluatePrintngConsole(userCardsReadyForEvaluation, textScore);
    printingScreen(textScore);
}

function hideButton() {
    document.getElementById("btn_user_cards").setAttribute("class", "display_none")
    document.getElementById("btn_random_cards").setAttribute("class", "display_none")

}

