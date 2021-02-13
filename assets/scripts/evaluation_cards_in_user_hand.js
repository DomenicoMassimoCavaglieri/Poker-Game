////This function analyzes the user's card combination and prints the result
function printScore(cards) {
    if (findFiveIdenticalCards(cards)) {
        document.getElementById("score_text").innerHTML = "5 dentical cards...";
        console.log("5 dentical cards...");
    } else if (findAceStraigth(cards) && findFlush(cards)) {
        document.getElementById("score_text").innerHTML = "Royal Straigth";
        console.log("Royal Straigth");
    } else if (findstraigth(cards) && findFlush(cards)) {
        document.getElementById("score_text").innerHTML = "Straigth Flush";
        console.log("Straigth Flush")
    } else if (findAceStraigth(cards)) {
        document.getElementById("score_text").innerHTML = "Straight";
        console.log("Straight");
    } else if (findstraigth(cards)) {
        document.getElementById("score_text").innerHTML = "Straight";
        console.log("Straight");
    } else if (CheckHEqualCards(cards).length == 6) {
        document.getElementById("score_text").innerHTML = "Four of a Kind";
        console.log("Four of a Kind");
    } else if (CheckHEqualCards(cards).length == 4) {
        document.getElementById("score_text").innerHTML = "Full House";
        console.log("Full House");
    } else if (findFlush(cards)) {
        document.getElementById("score_text").innerHTML = "Flush";
        console.log("Flush")
    } else (otherCases(CheckHEqualCards(cards)))
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
        console.log(true);    
        return true;
        } else return false;
}

function findFlush(cards) {
    if (cards[0][1] === cards[1][1] &&
        cards[2][1] === cards[3][1] &&
        cards[3][1] === cards[4][1]) {
        console.log(true);
        return true;
        } else return false;
}


//create a variable that contains the identical cards
function CheckHEqualCards(cards) {
    
    var doubleCardsHands = [];

    for (var i = 0; i < cards.length; i++) {
        for (var j = i + 1; j < 5; j++) {
            if (cards[i][0] == cards[j][0]) {
                doubleCardsHands.push(cards[i]);
            }
        }
    }
    console.log(doubleCardsHands.length);
    return doubleCardsHands;
}


function otherCases(cards) {
    switch (cards.length) {
        case 0:
            document.getElementById("score_text").innerHTML = "High Cards";
            console.log("High Cards");
            break;
        case 1:
            document.getElementById("score_text").innerHTML = "Pair";
            console.log("Pair");
            break;
        case 2:
            document.getElementById("score_text").innerHTML = "Two Pair";
            console.log("Two Pair");
            break;
        case 3:
            document.getElementById("score_text").innerHTML = "Three of a Kind";
            console.log("Three of a Kind");
            break;
    }
}


