function startRandom() {
    var cardsDeck = createPokerDeck();
    cardsDeckPrintingConsole();
    fisherYates(cardsDeck);
    var cardsHand = createCardsHand(cardsDeck);
    randomCardsInInputField(cardsHand);
    cardsHandPrintingConsole(cardsDeck, cardsHand);
    var integersCardsHand = figuresIntoIntegers(cardsHand);
    var deckReadyForEvaluation = integersCardsHand.sort((a, b) => a[0] - b[0]);
    var textScore = evaluateCardsHand(deckReadyForEvaluation);
    randomCardsEvaluationPrintngConsole(deckReadyForEvaluation, textScore);
    printingScreen(textScore);
    
}