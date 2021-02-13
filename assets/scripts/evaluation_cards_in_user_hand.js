//Hand of cards is managed through two functions:

//Hand of all different cards
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
 
 //Hand with at least two of the same cards
 function handWithEqualCards (cards) {
    //create a variable that contains the same cards
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
        case 10:
            console.log(">>You have selected 5 cards with the same value...<<");
            break;
    }
    
}
