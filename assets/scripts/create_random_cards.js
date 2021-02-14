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

    

    //Turns "J" into 11, "Q" into 12, "K" into 13
    figuresIntoIntegers(randomDeck);

    

    //Sort the hand of cards
    randomDeck.sort((a, b) => a[0] - b[0]);

    //Print
    randomDeck.forEach(card => console.log("Card: " + card));

    //Print
    printScore(randomDeck);
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
