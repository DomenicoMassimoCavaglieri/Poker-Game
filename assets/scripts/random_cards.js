// This function creates a Poker deck: an array of 52 cards (value, suit):
function getPokerDeck() {
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

var cardsDeck = getPokerDeck();
console.log(cardsDeck);
shuffle(cardsDeck);
cardsHand = getCardsHand(cardsDeck);
console.log(cardsDeck);
cardsHand.forEach(card => console.log(card));
figuresIntoIntegers(cardsHand);
randomCardsReadyForEvaluation = figuresIntoIntegers(cardsHand);
console.log(randomCardsReadyForEvaluation);

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

// This function returns the hand of cards:
function getCardsHand(deck) {
    return deck.slice(0, 5);
}
    

function figuresIntoIntegers(cards) {
    for (var i = 0; i < cards.length; i++) {
        if (cards[i].value === "A") {
            cards[i].value = 1;
        } else if (cards[i].value === "J") {
            cards[i].value = 11;
        } else if (cards[i].value === "Q") {
            cards[i].value = 12;
        } else if (cards[i].value === "K") {
            cards[i].value = 13;
        }
    }
    return cards;
}
    
