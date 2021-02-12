//Create the variable containing the user's hand of cards
var userCardHand = createUserCardHand();
userCardHand.forEach(card => console.log("Card: " + card));

//turns card values into integers
cardValueIntoIntegers(userCardHand);

//Sort the hand of cards
userCardHand.sort((a, b) => a[0] - b[0]);


//Hand of cards is managed through two functions:

//Hand of all different cards
handWithDifferentCards(userCardHand);

//Hand with at least two of the same cards
handWithEqualCards(userCardHand);


function handWithDifferentCards(cards) {
    //Create the conditions to be evaluated for hand of all different cards
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



function handWithEqualCards(cards) {
    //Create the variable containing the double cards
    var doubleCardsHands = [];

    for (var i = 0; i < cards.length; i++) {
        for (var j = i + 1; j < 5; j++) {
            if (cards[i][0] == cards[j][0]) {
                doubleCardsHands.push(cards[i]);
            }
        }
    }

    //Analyze the conditions and print the result
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

//Create the function containing the user's hand of cards
function createUserCardHand() {
    let userDeck = [];
    userDeck.push([document.getElementById("card_1").value, document.getElementById("card_suit_1").value])
    userDeck.push([document.getElementById("card_2").value, document.getElementById("card_suit_2").value])
    userDeck.push([document.getElementById("card_3").value, document.getElementById("card_suit_3").value])
    userDeck.push([document.getElementById("card_4").value, document.getElementById("card_suit_4").value])
    userDeck.push([document.getElementById("card_5").value, document.getElementById("card_suit_5").value])    
    console.log(userDeck);
    return userDeck;
}

//turns card values into integers
function cardValueIntoIntegers(cards) {
    for (var i = 0; i < cards.length; i++) {

        if (cards[i][0] == "1") {
            cards[i][0] = 1
        }
        if (cards[i][0] == "2") {
            cards[i][0] = 2
        }
        if (cards[i][0] == "3") {
            cards[i][0] = 3
        }
        if (cards[i][0] == "4") {
            cards[i][0] = 4
        }
        if (cards[i][0] == "5") {
            cards[i][0] = 5
        }
        if (cards[i][0] == "6") {
            cards[i][0] = 6
        } if (cards[i][0] == "7") {
            cards[i][0] = 7
        }
        if (cards[i][0] == "8") {
            cards[i][0] = 8
        }
        if (cards[i][0] == "9") {
            cards[i][0] = 9
        }
        if (cards[i][0] == "10") {
            cards[i][0] = 10
        }
        if (cards[i][0] == "J") {
            cards[i][0] = 11
        }
        if (cards[i][0] == "Q") {
            cards[i][0] = 12
        }
        if (cards[i][0] == "K") {
            cards[i][0] = 13
        }
        if (cards[i][0] == "K") {
            cards[i][0] = 13
        }
    }
}
