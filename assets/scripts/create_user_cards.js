//This function creates a multidimensional array with the cards chosen by the user
function createUserCardHand() {
    let userDeck = [];
    userDeck.push([document.getElementById("card_1").value,
    document.getElementById("card_suit_1").value]);
    userDeck.push([document.getElementById("card_2").value,
    document.getElementById("card_suit_2").value]);
    userDeck.push([document.getElementById("card_3").value,
    document.getElementById("card_suit_3").value]);
    userDeck.push([document.getElementById("card_4").value,
    document.getElementById("card_suit_4").value]);
    userDeck.push([document.getElementById("card_5").value,
    document.getElementById("card_suit_5").value]);

    //Print the user's cards to the console
    userDeck.forEach(card => console.log("Card: " + card));

    //Turn card values into integers
    cardValueIntoIntegers(userDeck);

    //Sort the hand of cards
    userDeck.sort((a, b) => a[0] - b[0]);

    //analyze the user's card combination and prints the result on the screen
    printScore(userDeck);
}

//This function turns card values into integers
function cardValueIntoIntegers(cards) {
    for (var i = 0; i < cards.length; i++) {

        if (cards[i][0] == "1") {
            cards[i][0] = 1
        }
        if (cards[i][0] == "2") {
            cards[i][0] = 2
        }
        if (cards[i][0] == "3") {
            cards[i][0] = 3
        }
        if (cards[i][0] == "4") {
            cards[i][0] = 4
        }
        if (cards[i][0] == "5") {
            cards[i][0] = 5
        }
        if (cards[i][0] == "6") {
            cards[i][0] = 6
        } if (cards[i][0] == "7") {
            cards[i][0] = 7
        }
        if (cards[i][0] == "8") {
            cards[i][0] = 8
        }
        if (cards[i][0] == "9") {
            cards[i][0] = 9
        }
        if (cards[i][0] == "10") {
            cards[i][0] = 10
        }
        if (cards[i][0] == "J") {
            cards[i][0] = 11
        }
        if (cards[i][0] == "Q") {
            cards[i][0] = 12
        }
        if (cards[i][0] == "K") {
            cards[i][0] = 13
        }
        if (cards[i][0] == "K") {
            cards[i][0] = 13
        }
    }
}
