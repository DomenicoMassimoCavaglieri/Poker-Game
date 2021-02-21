function printingScreen(text){
    document.getElementById("score_text").innerHTML = text;
}

function resetPrintingScreen() {
    document.getElementById("score_text").innerHTML = "";
}

function randomCardsInInputField(cards) {
    document.getElementById("card_1").value = cards[0][0]
    document.getElementById("card_suit_1").value = cards[0][1]
    document.getElementById("card_2").value = cards[1][0]
    document.getElementById("card_suit_2").value = cards[1][1]
    document.getElementById("card_3").value = cards[2][0]
    document.getElementById("card_suit_3").value = cards[2][1]
    document.getElementById("card_4").value = cards[3][0]
    document.getElementById("card_suit_4").value = cards[3][1]
    document.getElementById("card_5").value = cards[4][0]
    document.getElementById("card_suit_5").value = cards[4][1]
}

function resetValueInputField() {
    document.getElementById("card_1").value = "";
    document.getElementById("card_2").value = "";
    document.getElementById("card_3").value = "";
    document.getElementById("card_4").value = "";
    document.getElementById("card_5").value = "";
}

