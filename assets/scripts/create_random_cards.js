
var cardsDeck = createDeck();
cardsDeck.map(card => createDeck(card));

var shuffledCardsDeck = shuffle(cardsDeck);

var cardsHand = shuffledCardsDeck.slice(0, 5);

var integersCardsHands = figuresIntoIntegers(cardsHand);

integersCardsHands.sort((a, b) => a[0] - b[0]);


function createDeck() {
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

function shuffle(array) {
    var copy = [], n = array.length, i;

    while (n) {

        i = Math.floor(Math.random() * n--);

        copy.push(array.splice(i, 1)[0]);
    }
    return copy;
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

function findFlush(cards) {
    if (cards[0][1] === cards[1][1] &&
        cards[2][1] === cards[3][1] &&
        cards[3][1] === cards[4][1]) {
        return true;
    } else return false;
}



