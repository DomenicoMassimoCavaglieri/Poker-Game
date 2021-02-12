//Create the deck of cards
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

//Shuffle the deck of cards
var deck = createDeck();
fisherYates(deck);
function fisherYates(cards) {
    var i, j, k;
    for (i =cards.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * i)
        k =cards[i]
       cards[i] =cards[j]
       cards[j] = k
    }
}

//Create the variable containing card hand
var cardHand = deck.slice(0, 5);
cardHand.forEach(card => console.log("Card: " + card));

//Turns "J" into 11, "Q" into 12, "K" into 13
figuresIntoIntegers(cardHand);

//Sort the hand of cards
cardHand.sort((a, b) => a[0] - b[0]);


//Hand of cards is managed through two functions:

//Hand of all different cards
handWithDifferentCards(cardHand);

//Hand with at least two of the same cards
handWithEqualCards(cardHand);


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


//Manual test
//var cardHand = [[1, "♣"], [2, "♣"], [3, "♣"], [4, "♣"], [5, "♣"]]