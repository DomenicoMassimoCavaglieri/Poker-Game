// The function evaluateCardsHand accepts 
//a multidimensional array [[integer 1-13, suit],[]] as arguments.
//Analyze array values based on poker scoring rules. 
//Returns a string containing the name of the score:

function evaluateCardsHand(cards) {
    var score;
    if (findFiveIdenticalCards(cards)) {
        score = "5 dentical cards...";
        return score;
    } else if (findAceStraigth(cards) && findFlush(cards)) {
        score = "Royal Straigth";
        return score;
    } else if (findstraigth(cards) && findFlush(cards)) {
        score = "Straigth Flush";
        return score;
    } else if (findAceStraigth(cards)) {
        score = "Straight";
        return score;
    } else if (findstraigth(cards)) {
        score = "Straight";
        return score;
    } else if (CheckEqualCards(cards).length == 6) {
        score = "Four of a Kind";
        return score;
    } else if (CheckEqualCards(cards).length == 4) {
        score = "Full House";
        return score;
    } else if (findFlush(cards)) {
        score = "Flush";
        return score;
    } else return otherCases(CheckEqualCards(cards));
}

//This funtion check the other possible combinations of cards
function otherCases(cards) {
    switch (cards.length) {
        case 0:
            score = "High Cards";
            return score;
        case 1:
            score = "Pair";
            return score;
        case 2:
            score = "Two Pair";
            return score;
        case 3:
            score = "Three of a Kind";
            return score;
    }
}

//These functions check the possible combinations of cards
function findFiveIdenticalCards(cards) {
    if (cards[0][0] == cards[1][0] &&
        cards[1][0] == cards[2][0] &&
        cards[2][0] == cards[3][0] &&
        cards[3][0] == cards[4][0]) {
        return true;
    } else return false;
}

function findstraigth(cards) {
    if (cards[0][0] + 4 == cards[1][0] + 3 &&
        cards[1][0] + 3 == cards[2][0] + 2 &&
        cards[2][0] + 2 == cards[3][0] + 1 &&
        cards[3][0] + 1 == cards[4][0]) {
        return true;
    } else return false;
}

function findAceStraigth(cards) {
    if (cards[0][0] == 1 && cards[1][0] == 10 &&
        cards[2][0] == 11 && cards[3][0] == 12 && cards[4][0] == 13) {
        return true;
    } else return false;
}

function findFlush(cards) {
    if (cards[0][1] === cards[1][1] &&
        cards[2][1] === cards[3][1] &&
        cards[3][1] === cards[4][1]) {
        return true;
    } else return false;
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
