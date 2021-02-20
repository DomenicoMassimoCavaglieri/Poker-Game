function getPokerDeck() {
    let deck = [];
    for (let i = 1; i < 14; i++) {
        let clubs = "♣";
        let diamonds = "♦"
        let hearts = "♥";
        let spades = "♠"
        if (i == 11) {
            deck.push(["J", clubs], ["J", diamonds], ["J", hearts], ["J", spades]);
        } else if (i == 12) {
            deck.push(["Q", clubs], ["Q", diamonds], ["Q", hearts], ["Q", spades]);
        } else if (i == 13) {
            deck.push(["K", clubs], ["K", diamonds], ["K", hearts], ["K", spades]);
        } else
            deck.push([i, clubs], [i, diamonds], [i, hearts], [i, spades]);
    }
    return deck;
}

//This function uses the algorithm of fisherYates
function shuffle(deck) {
    var i, j, k;
    for (i = deck.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * i)
        k = deck[i]
        deck[i] = deck[j]
        deck[j] = k
    }
}

function getCardsHand(deck) {
    return deck.slice(0, 5);
}

function figuresIntoIntegers(deck) {
    for (var i = 0; i < deck.length; i++) {
        if (deck[i][0] == "J") {
            deck[i][0] = 11
        }
        if (deck[i][0] == "Q") {
            deck[i][0] = 12
        }
        if (deck[i][0] == "K") {
            deck[i][0] = 13
        }
    }
}
