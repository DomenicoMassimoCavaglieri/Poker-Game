function cardsDeckPrintingConsole() {
    console.log("Deck of poker cards:" + "(" + createPokerDeck().length + ")" + " " + createPokerDeck());
}

function shaffledCardsDeckPrintingConsole(cards) {
    console.log("Shuffled Poker Cards Deck:"+ "(" + cards.length + ")" + " " + cards);
}

function cardsHandPrintingConsole(hand) {
    console.log("Your cards:" + " " + hand);
}

function cardsToEvaluatePrintngConsole(deckReadyForEvaluation, textScore) {
    console.log("Cards ready for eveluation:" + " " + deckReadyForEvaluation);
    console.log(textScore);
    console.log("-------------------------------------")
}


