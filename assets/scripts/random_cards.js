// This function creates a Poker deck: an array of 52 cards (value, suit):
function getDeck() {
    let deck = [];
    for (let i = 1; i < 14; i++) {
        let clubs = "♣";
        let diamonds = "♦";
        let hearts = "♥";
        let spades = "♠";
        if (i == 1) {
            deck.push({ value: "A", suit: clubs }, {value: "A", suit: diamonds }, { value: "A", suit: hearts }, { value:"A", suit: spades });
        } else if (i == 11) {
            deck.push({ value: "J", suit: clubs }, { value: "J", suit: diamonds }, { value: "J", suit: hearts }, { value: "J", suit: spades });
        } else if (i == 12) {
            deck.push({ value: "Q", suite: clubs }, { value: "Q", suite: diamonds }, { value: "Q", suite: hearts }, { value: "Q", suite: spades });
        } else if (i == 13) {
            deck.push({ value: "K", suite: clubs }, { value: "K", suite: diamonds }, { value: "K", suite: hearts }, { value: "K", suite: spades });
        } else deck.push({value: i, suite: clubs }, {value: i, suite: diamonds }, { value: i, suite: hearts}, { value: i, suite: spades });
    }
    return deck;
}

var cardsDeck = getDeck();
shuffle(cardsDeck);
cardsHand = getCardsHand(cardsDeck);

function getCardsHand(deck) {
    return deck.slice(0, 5);
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
