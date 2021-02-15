function startRandom() {
    var cardsDeck = createPokerDeck();
    cardsDeckPrintingConsole();
    fisherYates(cardsDeck);
    var cardsHand = createCardsHand(cardsDeck);
    cardsHandPrintingConsole(cardsDeck, cardsHand);
    var integersCardsHand = figuresIntoIntegers(cardsHand);
    var deckReadyForEvaluation = integersCardsHand.sort((a, b) => a[0] - b[0]);
    var textScore = evaluateCardsHand(deckReadyForEvaluation);
    randomCardsPrintngConsole(deckReadyForEvaluation, textScore);
    printingScreen(textScore);
}