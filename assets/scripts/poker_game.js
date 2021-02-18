//The function evaluateCardsHand: 
//Input: a possible Poker hand in the form of a 
//multidimensional array of length 5 
//[[integer 1-13, suit], [[integer 1-13, suit] ...], 
//sorted in ascending order according to the card number 
//(order suit is indifferent).
//Task: Analyze the input according to the rules of the game of Poker.
//Output: Returns the string with the result.

var fiveIdenticalCards = "5 identical cards...";
var royalStraigth = "Royal Straigth";
var straigthFlush = "Straigth Flush";
var straight = "Straight";
var fourOfAKind = "Four of a Kind";
var fullHouse = "Full House";
var Flush = "Flush";
var pair = "Pair";
var twoPair = "Two Pair";
var threeOfAKind = "Three of a Kind";
var highCard1 = "High Card, Ace";
var hightCardK = "High Card, K";
var hightCardQ = "High Card, Q";
var hightCardJ = "High Card, J";
var hightCard10 = "High Card, 10";
var hightCard9 = "High Card, 9";
var hightCard8 = "High Card, 8";
var hightCard7 = "High Card, 7";

function evaluateCardsHand(cards) {
    if (findFiveIdenticalCards(cards)) {
        return fiveIdenticalCards;
    } else if (findAceStraigth(cards) && findFlush(cards)) {
        return royalStraigth;
    } else if (findstraigth(cards) && findFlush(cards)) {
        return straigthFlush;
    } else if (findAceStraigth(cards)) {
        return straight;
    } else if (findstraigth(cards)) {
        return straight;
    } else if (checkEqualCards(cards).length == 6) {
        return fourOfAKind;
    } else if (checkEqualCards(cards).length == 4) {
        return fullHouse;
    } else if (findFlush(cards)) {
        return Flush;
    } else return otherCases(checkEqualCards(cards), cards);
}

//This funtion check the other possible combinations of cards
function otherCases(doubleCards, cards) {
    switch (doubleCards.length) {
        case 0:
            return evaluateHighCardScore(cards);
        case 1:
            return pair;
        case 2:
            return twoPair;
        case 3:
            return threeOfAKind;
    }
}

//These functions check the possible combinations of cards
function findFiveIdenticalCards(cards) {
    return cards[0][0] == cards[1][0] &&
        cards[1][0] == cards[2][0] &&
        cards[2][0] == cards[3][0] &&
        cards[3][0] == cards[4][0]
}

function findstraigth(cards) {
    return cards[0][0] + 4 == cards[1][0] + 3 &&
        cards[1][0] + 3 == cards[2][0] + 2 &&
        cards[2][0] + 2 == cards[3][0] + 1 &&
        cards[3][0] + 1 == cards[4][0]
}

function findAceStraigth(cards) {
    return cards[0][0] == 1 && cards[1][0] == 10 &&
        cards[2][0] == 11 && cards[3][0] == 12 && cards[4][0] == 13
}

function findFlush(cards) {
    return cards[0][1] == cards[1][1] &&
        cards[1][1] == cards[2][1] &&
        cards[2][1] == cards[3][1] &&
        cards[3][1] == cards[4][1]
}

//This function returns a variable containing
//the number of times the cards are repeated
function checkEqualCards(cards) {

    var doubleCardsHands = [];

    for (var i = 0; i < cards.length; i++) {
        for (var j = i + 1; j < 5; j++) {
            if (cards[i][0] == cards[j][0]) {
                doubleCardsHands.push(cards[i]);
            }
        }
    }
    return doubleCardsHands;
}

//This function returns a variable containing 
//the numbers of the cards without the suits
function cardsHandWithoutSuit(cards) {

    var numbersOfCards = [];

    for (var i = 0; i < cards.length; i++) {
        numbersOfCards.push(cards[i][0]);
    }
    return numbersOfCards;
}

function evaluateHighCardScore(cards) {
    if (Math.min(...cardsHandWithoutSuit(cards)) == 1) {
        return highCard1;
    } else if (Math.max(...cardsHandWithoutSuit(cards)) == 13) {
        return hightCardK;
    } else if (Math.max(...cardsHandWithoutSuit(cards)) == 12) {
        return hightCardQ;
    } else if (Math.max(...cardsHandWithoutSuit(cards)) == 11) {
        return hightCardJ;
    } else if (Math.max(...cardsHandWithoutSuit(cards)) == 10) {
        return hightCard10;
    } else if (Math.max(...cardsHandWithoutSuit(cards)) == 9) {
        return hightCard9;
    } else if (Math.max(...cardsHandWithoutSuit(cards)) == 8) {
        return hightCard8;
    } else if (Math.max(...cardsHandWithoutSuit(cards)) == 7) {
        return hightCard7;
    }
}
