function printingScreen(text){
    document.getElementById("score_text").innerHTML = text;
}

function resetPrintingScreen() {
    document.getElementById("score_text").innerHTML = "";
}

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

function resetValueInputField() {
    document.getElementById("card_1").value = "";
    document.getElementById("card_2").value = "";
    document.getElementById("card_3").value = "";
    document.getElementById("card_4").value = "";
    document.getElementById("card_5").value = "";
}

function printingCounter(text) {
    document.getElementById("counter_text").innerHTML = "Cards " + text.length + "/ 52";
        
}
