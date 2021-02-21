function startRandom() {
    var cardsDeck = getPokerDeck();
    cardsDeckPrintingConsole();
    shuffle(cardsDeck);
    shuffledCardsDeckPrintingConsole(cardsDeck);
    var cardsHand = getCardsHand(cardsDeck);
    randomCardsInInputField(cardsHand);
    cardsHandPrintingConsole(cardsHand);
    figuresIntoIntegers(cardsHand);
    var randomCardsReadyForEvaluation = cardsHand.sort((a, b) => a[0] - b[0]);
    var textScore = evaluateCardsHand(randomCardsReadyForEvaluation);
    cardsToEvaluatePrintngConsole(randomCardsReadyForEvaluation, textScore);
    printingScreen(textScore);
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

hideYourCards();
resetValueInputField()

function hideYourCards() {
    document.getElementById("btn_user_cards").setAttribute("class", "display_none")
}

function displayRandomCards() {
    resetValueInputField();
    resetPrintingScreen()
    document.getElementById("btn_user_cards").setAttribute("class", "display_none")
    document.getElementById("btn_random_cards").setAttribute("class", "display_block red")

}

function displayYourCards() {
    resetValueInputField();
    resetPrintingScreen();
    document.getElementById("btn_user_cards").setAttribute("class", "display_block red")
    document.getElementById("btn_random_cards").setAttribute("class", "display_none")
}