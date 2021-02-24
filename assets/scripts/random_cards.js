// function startRandom() {
    
//     console.log("----------------------");
//     console.log(randomCardsReadyForEvaluation);
//     console.log("----------------------");
// }

// function displayRandomCards() {
//     printDeck(getPokerDeck());
//     console.log("---------------------")
//     var cardsDeck = getPokerDeck();
//     shuffle(cardsDeck);
//     printDeck(cardsDeck);
    
//     console.log("----------------------");
//     console.log(randomCardsReadyForEvaluation);
//     console.log("----------------------");
// }



// This function creates a Poker deck: an array of 52 cards (value, suit):
function getPokerDeck() {
    let deck = [];
    for (let i = 1; i < 14; i++) {
        let clubs = "♣";
        let diamonds = "♦";
        let hearts = "♥";
        let spades = "♠";
        // if (i == 1) {
        //     deck.push({ value: "A", suit: clubs }, { value: "A", suit: diamonds }, { value: "A", suit: hearts }, { value: "A", suit: spades });
        // } else 
        if (i == 11) {
            deck.push({ value: "J", suit: clubs }, { value: "J", suit: diamonds }, { value: "J", suit: hearts }, { value: "J", suit: spades });
        } else if (i == 12) {
            deck.push({ value: "Q", suit: clubs }, { value: "Q", suit: diamonds }, { value: "Q", suit: hearts }, { value: "Q", suit: spades });
        } else if (i == 13) {
            deck.push({ value: "K", suit: clubs }, { value: "K", suit: diamonds }, { value: "K", suit: hearts }, { value: "K", suit: spades });
        } else deck.push({ value: i, suit: clubs }, { value: i, suit: diamonds }, { value: i, suit: hearts }, { value: i, suit: spades });
    }
    return deck;
}

//This function shuffles the deck using the Fischer-Yates algorithm
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
// function getRemainingDeck(deck) {
//     var counter = deck.length;
//     if (counter >= 2) {
//         deck.splice(0,5);
//         console.log("OKKIO " + counter);   
//         return deck;
//     } 
//}


// function cardsDeckLimit(deck) {
//     var counter = deck.length;
//     console.log("Attenzione mancano " + deck.length + " carte");
//     return counter > 7;
// }

// function cardsHandFromRemaningDeck(deck) {
//     if (cardsDeckLimit(deck)) {
//         console.log(cardsDeckLimit(deck))
//         return deck.splice(0,5);
//     } else return deck.splice(0,0);
// }


