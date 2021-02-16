function startRandom() {
    var cardsDeck = createPokerDeck();
    cardsDeckPrintingConsole();
    fisherYates(cardsDeck);
    shaffledCardsDeckPrintingConsole(cardsDeck);
    var cardsHand = createCardsHand(cardsDeck);
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