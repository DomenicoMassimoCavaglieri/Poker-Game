//This function creates a multidimensional array with the cards chosen by the user
function getUserCardsHand() {
    let userHand = [];
    userHand.push({value: document.getElementById("card_1").value,
    suit: document.getElementById("card_suit_1").value});

    userHand.push({value: document.getElementById("card_2").value,
    suit: document.getElementById("card_suit_2").value});

    userHand.push({value: document.getElementById("card_3").value,
    suit:document.getElementById("card_suit_3").value});
    
    userHand.push({value: document.getElementById("card_4").value,
    suit:document.getElementById("card_suit_4").value});
    
    userHand.push({value: document.getElementById("card_5").value,
    suit:document.getElementById("card_suit_5").value});
    
    return userHand;
}
