const CHOOSE_FIVE_CARDS = "Choose 5 cards";
const FIVE_IDENTICAL_CARDS = "5 identical cards...";
// var royalStraigth = "Royal Straigth";
// var straigthFlush = "Straigth Flush";
// var straight = "Straight";
// var fourOfAKind = "Four of a Kind";
// var fullHouse = "Full House";
// var Flush = "Flush";
// var pair = "Pair";
// var twoPair = "Two Pair";
// var threeOfAKind = "Three of a Kind";
// var highCard1 = "High Card, Ace";
// var hightCardK = "High Card, K";
// var hightCardQ = "High Card, Q";
// var hightCardJ = "High Card, J";
// var hightCard10 = "High Card, 10";
// var hightCard9 = "High Card, 9";
// var hightCard8 = "High Card, 8";
// var hightCard7 = "High Card, 7";

function evaluateCardsHand(cards) {
    if (findNoSelectedCards(getCardsValues(cards))) {
        return CHOOSE_FIVE_CARDS;
    } else if (findFiveIdenticalCards(cards)) {
        return FIVE_IDENTICAL_CARDS;
    }
}


//This funtion check the other possible combinations of cards
// function otherCases(doubleCards, cards) {
//     switch (doubleCards.length) {
//         case 0:
//             return evaluateHighCardScore(cards);
//         case 1:
//             return pair;
//         case 2:
//             return twoPair;
//         case 3:
//             return threeOfAKind;
//     }
// }

//These functions check the possible combinations of cards





//This function checks if all cards of the hand cards have been selected 
function findNoSelectedCards(cards) {
    console.log(cards);
    for (i = 0; i<cards.length; i++) {
        return cards[i] === "" 
    }
}


//This function checks if 5 identical cards have been chosen
function findFiveIdenticalCards(cards) {
    var numberCard = card[0];
    return cards.every(function (card) {
        card === numberCard;
    });
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
    return valueCard;
}
