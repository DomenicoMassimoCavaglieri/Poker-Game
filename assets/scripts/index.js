hideButton();
resetValueInputField()

var cardsDeck;
var randomCardsHand;
var userCardsHand;
var cardsValues;

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
    cardsValues = getCardsValues(randomCardsHand);
    console.log(cardsValues);
    console.log("-----------------------");
    
    
    //var randomCardsReadyForEvaluation = randomCardsHand.map(getCardsValues).sort((a, b) => a - b);
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
    // var randomCardsReadyForEvaluation = randomCardsHand.sort((a, b) => a[0] - b[0]);
    switch (cardsDeck.length > 5) {
        case true:
            randomCardsHand = cardsDeck.splice(0, 5);
            randomCardsInInputField(randomCardsHand);
            printingCounter(cardsDeck);
            printingCardsConsole(randomCardsHand);
            printingCardsConsole(cardsDeck); 
            cardsValues = getCardsValues(randomCardsHand);
            console.log(cardsValues);
            console.log("----------------------")
            break;
        case false:
            displayRandomCards()
    }
    
    
    
    
    // var randomCardsReadyForEvaluation = randomCardsHand.map(getCardsValues).sort((a, b) => a - b);
    // var textScore = evaluaterandomCardsHand(randomCardsReadyForEvaluation);
    //cardsToEvaluatePrintngConsole(randomCardsReadyForEvaluation, textScore);
    //printingScreen(textScore);
}

function startUserInput() {
    userCardsHand = getUserCardsHand()
    printingCardsConsole(userCardsHand);
    //cardsValuesIntoIntegers(userCardsHand);
    console.log(userCardsHand);
    var userValue = getCardsValues(userCardsHand);
    console.log(userValue);
    console.log("----------------------")
    // var userCardsReadyForEvaluation = userCardsHand.sort((a, b) => a[0] - b[0]);
    //var textScore = evaluateuserCardsHand(userCardsHand);
    // cardsToEvaluatePrintngConsole(userCardsReadyForEvaluation, textScore);
    //printingScreen(textScore);
}

function hideButton() {
    document.getElementById("btn_user_cards").setAttribute("class", "display_none")
    document.getElementById("btn_random_cards").setAttribute("class", "display_none")

}

