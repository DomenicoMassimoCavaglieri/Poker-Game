function getInput() {
    document.getElementById("card_text_1").innerHTML = document.getElementById("card_1").value;
    document.getElementById("card_text_suit_1").innerHTML = document.getElementById("card_suit_1").value;
    document.getElementById("card_text_2").innerHTML = document.getElementById("card_2").value;
    document.getElementById("card_text_suit_2").innerHTML = document.getElementById("card_suit_2").value;
    document.getElementById("card_text_3").innerHTML = document.getElementById("card_3").value;
    document.getElementById("card_text_suit_3").innerHTML = document.getElementById("card_suit_3").value;
    document.getElementById("card_text_4").innerHTML = document.getElementById("card_4").value;
    document.getElementById("card_text_suit_4").innerHTML = document.getElementById("card_suit_4").value;
    document.getElementById("card_text_5").innerHTML = document.getElementById("card_5").value;
    document.getElementById("card_text_suit_5").innerHTML = document.getElementById("card_suit_5").value;
}





//Create the function containing the user's hand of cards
function createUserCardHand() {
    let userDeck = [];
    userDeck.push([document.getElementById("card_1").value, document.getElementById("card_suit_1").value]);
    userDeck.push([document.getElementById("card_2").value, document.getElementById("card_suit_2").value]);
    userDeck.push([document.getElementById("card_3").value, document.getElementById("card_suit_3").value]);
    userDeck.push([document.getElementById("card_4").value, document.getElementById("card_suit_4").value]);
    userDeck.push([document.getElementById("card_5").value, document.getElementById("card_suit_5").value]);



    userDeck.forEach(card => console.log("Card: " + card));

    //turns card values into integers
    cardValueIntoIntegers(userDeck);

    //Sort the hand of cards
    userDeck.sort((a, b) => a[0] - b[0]);


    //Hand of cards is managed through two functions:
    
    //Hand with at least two of the same cards
    handWithDifferentCards(userDeck);
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



/////////////////////////////////////////////////////////////

// //Create the variable containing the user's hand of cards
// var userCardHand = createUserCardHand();
// userCardHand.forEach(card => console.log("Card: " + card));

// //turns card values into integers
// cardValueIntoIntegers(userCardHand);

// //Sort the hand of cards
// userCardHand.sort((a, b) => a[0] - b[0]);


// //Hand of cards is managed through two functions:

// //Hand of all different cards
// handWithDifferentCards(userCardHand);

// //Hand with at least two of the same cards
// handWithEqualCards(userCardHand);


// //Create the function containing the user's hand of cards
// function createUserCardHand() {
//     let userDeck = [];
//     userDeck.push([document.getElementById("card_1").value, document.getElementById("card_suit_1").value]);
//     userDeck.push([document.getElementById("card_2").value, document.getElementById("card_suit_2").value]);
//     userDeck.push([document.getElementById("card_3").value, document.getElementById("card_suit_3").value]);
//     userDeck.push([document.getElementById("card_4").value, document.getElementById("card_suit_4").value]);
//     userDeck.push([document.getElementById("card_5").value, document.getElementById("card_suit_5").value]);   
//     return userDeck;
// }

// //turns card values into integers
// function cardValueIntoIntegers(cards) {
//     for (var i = 0; i < cards.length; i++) {

//         if (cards[i][0] == "1") {
//             cards[i][0] = 1
//         }
//         if (cards[i][0] == "2") {
//             cards[i][0] = 2
//         }
//         if (cards[i][0] == "3") {
//             cards[i][0] = 3
//         }
//         if (cards[i][0] == "4") {
//             cards[i][0] = 4
//         }
//         if (cards[i][0] == "5") {
//             cards[i][0] = 5
//         }
//         if (cards[i][0] == "6") {
//             cards[i][0] = 6
//         } if (cards[i][0] == "7") {
//             cards[i][0] = 7
//         }
//         if (cards[i][0] == "8") {
//             cards[i][0] = 8
//         }
//         if (cards[i][0] == "9") {
//             cards[i][0] = 9
//         }
//         if (cards[i][0] == "10") {
//             cards[i][0] = 10
//         }
//         if (cards[i][0] == "J") {
//             cards[i][0] = 11
//         }
//         if (cards[i][0] == "Q") {
//             cards[i][0] = 12
//         }
//         if (cards[i][0] == "K") {
//             cards[i][0] = 13
//         }
//         if (cards[i][0] == "K") {
//             cards[i][0] = 13
//         }
//     }
// }
