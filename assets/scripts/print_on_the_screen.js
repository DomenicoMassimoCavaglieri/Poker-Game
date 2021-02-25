//This function prints the result of the hand of cards on the screen
function printingScreen(text){
    document.getElementById("score_text").innerHTML = text;
}

//This function resets the printing of the result of the hand of cards
function resetPrintingScreen() {
    document.getElementById("score_text").innerHTML = "";
}

//This function prints the number of cards remaining in the deck
function printingCounter(text) {
    document.getElementById("counter_text").innerHTML = "Cards " + text.length + "/ 52";
}

//This function resets the printing of the card counter in the deck
function resetPrintingCounter() {
    document.getElementById("counter_text").innerHTML = "";
}

//This function prints the random hand of cards in user input field
function randomCardsInInputField(cards) {
    document.getElementById("card_1").value = cards[0].value;
    document.getElementById("card_suit_1").value = cards[0].suit;
    document.getElementById("card_2").value = cards[1].value;
    document.getElementById("card_suit_2").value = cards[1].suit;
    document.getElementById("card_3").value = cards[2].value;
    document.getElementById("card_suit_3").value = cards[2].suit;
    document.getElementById("card_4").value = cards[3].value;
    document.getElementById("card_suit_4").value = cards[3].suit;
    document.getElementById("card_5").value = cards[4].value;
    document.getElementById("card_suit_5").value = cards[4].suit;
}

//This function resets the user input field
function resetValueInputField() {
    document.getElementById("card_1").value = "";
    document.getElementById("card_2").value = "";
    document.getElementById("card_3").value = "";
    document.getElementById("card_4").value = "";
    document.getElementById("card_5").value = "";
}
