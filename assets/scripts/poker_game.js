//This function analyzes the hand of cards 
//and returns an array with all the scores made.
function evaluateCardsHand(cards) {
   
    if (findNoSelectedCards(getCardsValues(cards))) {
        return "Choose 5 cards";
    } else if (findFiveIdenticalCards(getCardsValues(cards))) {
        return "5 identical cards...";
    } else if (findAceStraigth(getCardsValues(cards)) && findFlush(getCardsSuit(cards))) {
        return "Royal Straigth";
    } else if (findStraigth(getCardsValues(cards)) && findFlush(getCardsSuit(cards))) {
        return "Straigth Flush";
    } else if (findAceStraigth(getCardsValues(cards))) {
        return "Straight";
    } else if (findStraigth(getCardsValues(cards))) {
        return "Straight";
    } else if (checkEqualCards(getCardsValues(cards)).length == 6) {
        return "Four of a Kind";
    } else if (checkEqualCards(getCardsValues(cards)).length == 4) {
        return "Full House";
    } else if (findFlush(getCardsSuit(cards))) {
        return "Flush";
    } else return otherCases(checkEqualCards(getCardsValues(cards)), getCardsValues(cards));
}

//This funtion check the other possible combinations of cards Pair, TwoPair, Three of a kind, High Card
function otherCases(doubleCards, cards) {
    switch (doubleCards.length) {
        case 0:
            return evaluateHighCardScore(cards);
        case 1:
            return "Pair";
        case 2:
            return "Two Pair";
        case 3:
            return "Three of a Kind";
    }
}

//This function checks if all cards of the hand cards have been selected 
function findNoSelectedCards(cards) {
    return cards.some(card => card === "");
}

//This function checks if 5 identical cards have been chosen
function findFiveIdenticalCards(cards) {
    var cardNumber = cards[0];
    return cards.every(function(card) {
        return card === cardNumber;
    })
}

//This function checks for the presence of a Flush
function findFlush(cards) {
    var cardSuit = cards[0];
    return cards.every(function(card) {
        return card === cardSuit;
    })
}

//This function checks for the presence of a straigth, Ace
function findAceStraigth(cards) {
    return cards[0] === 1 && cards[1] === 10 &&
            cards[2] === 11 && cards[3] === 12 && cards[4] === 13
}

//This function checks for the presence of a straigth
function findStraigth(cards) {
    return cards[0] + 4 == cards[1] + 3 &&
        cards[1] + 3 == cards[2] + 2 &&
        cards[2] + 2 == cards[3] + 1 &&
        cards[3] + 1 == cards[4]
}

//This function returns a variable containing
//the number of times the cards are repeated
function checkEqualCards(cards) {

    var doubleCardsHands = [];

    for (var i = 0; i < cards.length; i++) {
        for (var j = i + 1; j < 5; j++) {
            if (cards[i] == cards[j]) {
                doubleCardsHands.push(cards[i]);
            }
        }
    }
    return doubleCardsHands;
}

//This function checks the presence and value of the high card
function evaluateHighCardScore(cards) {
    if (Math.min(...cards) == 1) {
        return "High Card, Ace";
    } else if (Math.max(...cards) == 13) {
        return "High Card, K";
    } else if (Math.max(...cards) == 12) {
        return "High Card, Q";
    } else if (Math.max(...cards) == 11) {
        return "High Card, J";
    } else if (Math.max(...cards) == 10) {
        return "High Card, 10";
    } else if (Math.max(...cards) == 9) {
        return "High Card, 9";
    } else if (Math.max(...cards) == 8) {
        return "High Card, 8";
    } else if (Math.max(...cards) == 7) {
        return "High Card, 7";
    }
}

//This function returns an array with the card values
function getCardsValues(cards) {
    var valueCard = [];
    for (var i = 0; i < cards.length; i++) {
        if (cards[i].value === "1") {
            valueCard.push(1)
        }
        else if (cards[i].value === "2") {
            valueCard.push(2)
        }
        else if (cards[i].value === "3") {
            valueCard.push(3)
        }
        else if (cards[i].value === "4") {
            valueCard.push(4)
        }
        else if (cards[i].value === "5") {
            valueCard.push(5)
        }
        else if (cards[i].value === "6") {
            valueCard.push(6)
        }
        else if (cards[i].value === "7") {
            valueCard.push(7)
        }
        else if (cards[i].value === "8") {
            valueCard.push(8)
        }
        else if (cards[i].value === "9") {
            valueCard.push(9)
        }
        else if (cards[i].value === "10") {
            valueCard.push(10)
        }
        else if (cards[i].value === "J") {
            valueCard.push(11)
        }
        else if (cards[i].value === "Q") {
            valueCard.push(12)
        }
        else if (cards[i].value === "K") {
            valueCard.push(13)
        } else valueCard.push(cards[i].value);
    }
    return valueCard.sort((a, b) => a - b);
}

//This function returns an array with the card suit
function getCardsSuit(cards) {
    var suitCard = [];
    for (var i = 0; i < cards.length; i++) {
        suitCard.push(cards[i].suit);
    }
    return suitCard;
}
