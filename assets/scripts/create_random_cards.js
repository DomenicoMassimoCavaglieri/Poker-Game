function createCardsHand(cards) {
    return cards.slice(0, 5);
}

function createPokerDeck() {
    var cardsDeck = pokerDeckModel();
    cardsDeck.map(card => pokerDeckModel(card));
    return cardsDeck;
}

function pokerDeckModel() {
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

//This function shuffles the cards
function fisherYates(cards) {
    var i, j, k;
    for (i = cards.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * i)
        k = cards[i]
        cards[i] = cards[j]
        cards[j] = k
    }
}

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
    return cards;
}





