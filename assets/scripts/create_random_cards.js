//Create the randomDeck of cards
function createRandomCardHand() {
    let randomDeck = [];
    for (let i = 1; i < 14; i++) {
        let clubs = "♣";
        let diamonds = "♦"
        let hearts = "♥";
        let spades = "♠"
        if (i == 11) {
            randomDeck.push(["J", clubs], ["J", diamonds], ["J", hearts], ["J", spades]);
        } else if (i == 12) {
            randomDeck.push(["Q", clubs], ["Q", diamonds], ["Q", hearts], ["Q", spades]);
        } else if (i == 13) {
            randomDeck.push(["K", clubs], ["K", diamonds], ["K", hearts], ["K", spades]);
        } else
            randomDeck.push([i, clubs], [i, diamonds], [i, hearts], [i, spades]);
    }
    //Shuffle the randomDeck of cards
    fisherYates(randomDeck);

    //5 Cards
    randomDeck.slice(0, 5);

    //Prints the random cards to the console 
    console.log("-----------------");
    randomDeck.slice(0, 5).forEach(card => console.log("Card: " + card));
    console.log("-----------------");

    //Turns "J" into 11, "Q" into 12, "K" into 13
    figuresIntoIntegers(randomDeck);

    
    //Sort the hand of cards
    randomDeck.slice(0, 5).sort((a, b) => a[0] - b[0]);

    //Show random cards in input fields
    randomCardsInInputField(randomDeck.slice(0, 5).sort((a, b) => a[0] - b[0]));

    //analyzes the user's card combination and print score on the screen
    printScore(randomDeck);
}

//Show random cards in input fields
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


//Shuffle the randomDeck of cards
function fisherYates(cards) {
    var i, j, k;
    for (i =cards.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * i)
        k =cards[i]
       cards[i] =cards[j]
       cards[j] = k
    }
}


//Turns "J" into 11, "Q" into 12, "K" into 13
function figuresIntoIntegers(cards) {
    for (var i = 0; i < cards.length; i++) {

        if (cards[i][0] == "J") {
            cards[i][0] = 11
        }
        if (cards[i][0] == "Q") {
            cards[i][0] = 12
        }
        if (cards[i][0] == "K") {
            cards[i][0] = 13
        }
    }
}
