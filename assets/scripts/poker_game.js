//This function accepts as input a hand of cards from the game of Poker 
//(an array of {value, suit} objects), 
//analyzes it and returns a string with the name of the result.
function evaluateCardsHand(cards) {
    console.log(findAceStraigth(getCardsValues(cards)));
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
    } else if (checkEqualCards(getCardsValues(cards)) == 6) {
        return "Four of a Kind";
    } else if (checkEqualCards(getCardsValues(cards)) == 4) {
        return "Full House";
    } else if (findFlush(getCardsSuit(cards))) {
        return "Flush";
    } else switch (checkEqualCards(getCardsValues(cards))) {
        case 0:
            return highCardScore(getCardsValues(cards));
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
    return cards.every(function (card) {
        return card === cardNumber;
    })
}

//This function checks for the presence of a Flush
function findFlush(cards) {
    var cardSuit = cards[0];
    return cards.every(function (card) {
        return card === cardSuit;
    })
}

//This function checks for the presence of a straigth, Ace
function findAceStraigth(cards) {
    if (checkEqualCards(cards) === 0 && cards[0] === 1) {
        for (let i = 1; i < cards.length; i++) {
            for (let j = 10; j < 14; j++) {
                return cards[i] === j;
            }
        } 
    }
}

//This function checks for the presence of a straigth
function findStraigth(cards) {
    if (checkEqualCards(cards) === 0) {
        for (var i = 0; i < 5; i++) {
            for (var j = 4; i <= 0; i--) {
                return (cards[i] === cards[j] - j)
            }
        }
    }
}

//This function checks the presence and value of the high card
function highCardScore(cards) {
    let highCard = "High Card";
    return highCard + ", " + evaluateHighCardScore(cards)
}

function evaluateHighCardScore(cards) {
    let maxValue = (Math.max(...cards));
    if (Math.min(...cards) == 1) {
        return "Ace";
    } else switch (maxValue) {
        case 13:
            return "K";
        case 12:
            return "Q";
        case 11:
            return "J";
        case 10:
            return "10";
        case 9:
            return "9";
        case 8:
            return "8";
        case 7:
            return "7";
    }
}

//This function returns a variable containing
//the number of times the cards are repeated
function checkEqualCards(cards) {

    var doubleCardsHands = 0;

    for (var i = 0; i < cards.length; i++) {
        for (var j = i + 1; j < 5; j++) {
            if (cards[i] == cards[j]) {
                doubleCardsHands++;
            }
        }
    }
    return doubleCardsHands;
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
