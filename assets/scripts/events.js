function startRandom() {
    var cardsDeck = createPokerDeck();
    cardsDeckPrintingConsole();
    fisherYates(cardsDeck);
    shaffledCardsDeckPrintingConsole(cardsDeck);
    var cardsHand = createCardsHand(cardsDeck);
    randomCardsInInputField(cardsHand);
    cardsHandPrintingConsole(cardsHand);
    var randomIntegersCardsHand = figuresIntoIntegers(cardsHand);
    var randomCardsReadyForEvaluation = randomIntegersCardsHand.sort((a, b) => a[0] - b[0]);
    var textScore = evaluateCardsHand(randomCardsReadyForEvaluation);
    cardsToEvaluatePrintngConsole(randomCardsReadyForEvaluation, textScore);
    printingScreen(textScore);
}

function startUserInput() {
    var userCardsHand = getUserCardsHand();
        cardsHandPrintingConsole(userCardsHand);
        var userIntegersCardsHand = cardValueIntoIntegers(userCardsHand);
        var userCardsReadyForEvaluation = userIntegersCardsHand.sort((a, b) => a[0] - b[0]);
        var textScore = evaluateCardsHand(userCardsReadyForEvaluation);
        cardsToEvaluatePrintngConsole(userCardsReadyForEvaluation, textScore);
        printingScreen(textScore);
}