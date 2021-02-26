//This function prints the cards on the console (decks or hands of cards)
function printingCardsConsole(cards) {
    var result = "";
    for (card of cards) {
        result += card.value + card.suit + " ";
    }
    console.log(cards.length + " Cards: " + result);
}
