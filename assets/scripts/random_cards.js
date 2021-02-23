function startRandom() {
    cardsHand = remainingDeck.slice(0, 5);
    cardsHand.forEach(card => console.log(card));
    getRemainingDeck(remainingDeck);
    printDeck(remainingDeck); 
    var randomCardsReadyForEvaluation = cardsHand.map(figuresIntoIntegers).sort((a, b) => a - b);
    console.log("----------------------");
    console.log(randomCardsReadyForEvaluation);
    console.log("----------------------");
}

function displayRandomCards() {
    printDeck(getPokerDeck());
    console.log("---------------------")
    var cardsDeck = getPokerDeck();
    shuffle(cardsDeck);
    printDeck(cardsDeck);
    cardsHand = cardsDeck.slice(0, 5);
    cardsHand.forEach(card => console.log(card));
    remainingDeck = getRemainingDeck(cardsDeck);
    printDeck(remainingDeck);
    var randomCardsReadyForEvaluation = cardsHand.map(figuresIntoIntegers).sort((a, b) => a - b);
    console.log("----------------------");
    console.log(randomCardsReadyForEvaluation);
    console.log("----------------------");
}



// This function creates a Poker deck: an array of 52 cards (value, suit):
function getPokerDeck() {
    let deck = [];
    for (let i = 1; i < 14; i++) {
        let clubs = "♣";
        let diamonds = "♦";
        let hearts = "♥";
        let spades = "♠";
        if (i == 1) {
            deck.push({ value: "A", suit: clubs }, { value: "A", suit: diamonds }, { value: "A", suit: hearts }, { value: "A", suit: spades });
        } else if (i == 11) {
            deck.push({ value: "J", suit: clubs }, { value: "J", suit: diamonds }, { value: "J", suit: hearts }, { value: "J", suit: spades });
        } else if (i == 12) {
            deck.push({ value: "Q", suit: clubs }, { value: "Q", suit: diamonds }, { value: "Q", suit: hearts }, { value: "Q", suit: spades });
        } else if (i == 13) {
            deck.push({ value: "K", suit: clubs }, { value: "K", suit: diamonds }, { value: "K", suit: hearts }, { value: "K", suit: spades });
        } else deck.push({ value: i, suit: clubs }, { value: i, suit: diamonds }, { value: i, suit: hearts }, { value: i, suit: spades });
    }
    return deck;
}

///////////////////////////////
function printDeck(cards) {
    var result = "";
    for (card of cards) {
        result += card.value + card.suit + " ";
    }
    console.log(cards.length + " " + result);
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

// This function returns the hand of cards:
function getRemainingDeck(deck) {
    while (deck.length >= 5) {
        deck.splice(0,5);   
        return deck;
    }
   
}

//This function transforms card figures into integers
function figuresIntoIntegers(card) {
    switch (card.value) {
        case "A":
            return card.value = 1;
        case "J":
            return card.value = 11;
        case "Q":
            return card.value = 12;
        case "K":
            return card.value = 13;
        default:
            return card.value;
    }
}
