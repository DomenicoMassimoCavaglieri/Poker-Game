function printingDeckConsole(cards) {
    var result = "";
    for (card of cards) {
        result += card.value + card.suit + " ";
    }
    console.log(cards.length + " Cards: " + result);
}

function cardsHandPrintingConsole(hand) {
    console.log("Your cards:" + " " + hand);
}

function cardsToEvaluatePrintngConsole(deckReadyForEvaluation, textScore) {
    console.log("Cards ready for eveluation:" + " " + deckReadyForEvaluation);
    console.log(textScore);
    console.log("-------------------------------------")
}
