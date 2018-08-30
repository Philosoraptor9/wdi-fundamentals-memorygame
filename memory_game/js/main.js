
var cards = ["queen" , "queen" , "king" , "king"];
var cardsInPlay = [];
var cardID = 2;


var checkForMatch = function () {
	if (cardsInPlay.length === 2 && cardOne === cardTwo) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
	}
}

var flipCard = function(cardId) {
console.log("User flipped" + cards[cardId]);
cardsInPlay.push(cards[cardId]);
}

flipCard(checkForMatch);