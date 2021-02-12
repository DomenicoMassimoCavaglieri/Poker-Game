
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


//Card hand
var cardHand = deck.slice(0, 5);
cardHand.forEach(card => console.log("Card: " + card));
     


//Hand of cards is managed through two functions:

//Hand of all different cards
handWithDifferentCards(cardHand);
//Hand with at least two of the same cards
handWithEqualCards(cardHand);


function handWithDifferentCards(cards) {
    //Transform "J" into 11, "Q" into 12, "K" into 13
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

    //Sort the hand of cards
    cards.sort((a, b) => a[0] - b[0]);

    //Create the conditions to be evaluated
    var straigth = cards[0][0] + 4 == cards[1][0] + 3 &&
        cards[1][0] + 3 == cards[2][0] + 2 &&
        cards[2][0] + 2 == cards[3][0] + 1 &&
        cards[3][0] + 1 == cards[4][0];

    var aceStraigth = cards[0][0] == 1 && cards[1][0] == 10 &&
        cards[2][0] == 11 && cards[3][0] == 12 && cards[4][0] == 13;

    var flush = cards[0][1] === cards[1][1] &&
        cards[2][1] === cards[3][1] &&
        cards[3][1] === cards[4][1]

    var highCards = cards[0][0] != cards[1][0] &&
        cards[1][0] != cards[2][0] &&
        cards[2][0] != cards[3][0] &&
        cards[3][0] != cards[4][0];

    //Analyze the conditions and print the result
    if (aceStraigth && flush) {
        console.log(">>Royal Straigth<<");
    } else if (straigth && flush) {
        console.log(">>Straigth Flush<<")
    } else if (straigth) {
        console.log(">>Straight<<");
    } else if (aceStraigth) {
        console.log(">>Straight<<");
    } else if (flush) {
        console.log(">>Flush<<")
    } else if (highCards) {
        console.log(">>High Cards<<");
    }
}



function handWithEqualCards (cards) {
    var doubleCardsHands = [];

    for (var i = 0; i < cards.length; i++) {
        for (var j = i + 1; j < 5; j++) {
            if (cards[i][0] == cards[j][0]) {
                doubleCardsHands.push(cards[i]);
            }
        }
    }
    
    switch (doubleCardsHands.length) {
        case 1:
            console.log(">>Pair<<");
            break;
        case 2:
            console.log(">>Two Pair<<");
            break;
        case 3:
            console.log(">>Three of a Kind<<");
            break;
        case 4:
            console.log(">>Full House<<");
            break;
        case 6:
            console.log(">>Four of a Kind<<");
            break;
    }
    
}

