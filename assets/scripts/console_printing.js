function cardsDeckPrintingConsole() {
    console.log("Deck of poker cards:" + "(" + createPokerDeck().length + ")" + " " + createPokerDeck());
}

function cardsHandPrintingConsole(cards, hand) {
    console.log("Shuffled Poker Cards Deck:"+ "(" + cards.length + ")" + " " + cards);
    console.log("Your cards:" + " " + hand);
}

function randomCardsEvaluationPrintngConsole(deckReadyForEvaluation, textScore) {
    console.log("Cards ready fo eveluation:" + " " + deckReadyForEvaluation);
    console.log(textScore);
    console.log("-------------------------------------")
}