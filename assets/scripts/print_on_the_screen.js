function printingScreen(text){
    document.getElementById("score_text").innerHTML = text;
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

//This function turns 11 into "J", 12 into "Q", 13 into "K"
function integersIntoFigures(cards) {
    for (var i = 0; i < cards.length; i++) {

        if (cards[i][0] == 11) {
            cards[i][0] = "J"
        }
        if (cards[i][0] == 12) {
            cards[i][0] = "Q"
        }
        if (cards[i][0] == 13) {
            cards[i][0] = "K"
        }
    }
}