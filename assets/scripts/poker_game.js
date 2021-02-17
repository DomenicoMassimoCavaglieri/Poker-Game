// The function evaluateCardsHand accepts 
//Input: a possible Poker hand in the form of a 
//multidimensional array of length 5 
//[[integer 1-13, suit], [[integer 1-13, suit] ...], 
//sorted in ascending order according to the card number 
//(order seeds is indifferent).

var fiveIdenticalCards = "5 identical cards...";
var royalStraigth = "Royal Straigth";
var straigthFlush ="Straigth Flush";
var straight = "Straight";
var fourOfAKind = "Four of a Kind";
var fullHouse = "Full House";
var Flush = "Flush";
var highCards = "High Cards";
var pair = "Pair";
var twoPair = "Two Pair";
var threeOfAKind = "Three of a Kind";

function evaluateCardsHand(cards) {
    if (findFiveIdenticalCards(cards)) {
        return fiveIdenticalCards;
    } else if (findAceStraigth(cards) && findFlush(cards)) {
        return royalStraigth;
    } else if (findstraigth(cards) && findFlush(cards)) {
        return  straigthFlush;
    } else if (findAceStraigth(cards)) {
        return straight;
    } else if (findstraigth(cards)) {
        return straight;
    } else if (CheckEqualCards(cards).length == 6) {
        return fourOfAKind;
    } else if (CheckEqualCards(cards).length == 4) {
        return fullHouse;
    } else if (findFlush(cards)) {
        return Flush;
    } else return otherCases(CheckEqualCards(cards));
}

//This funtion check the other possible combinations of cards
function otherCases(cards) {
    switch (cards.length) {
        case 0:
            return highCards;
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

//This function creates a variable which contains 
//the number of times the cards are repeated
function CheckEqualCards(cards) {

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
