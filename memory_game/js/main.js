console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function (cardId) {
if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[2]) {
	alert("You found a match!");
} 
else {
	alert("Sorry, try again.");
} 
}

var flipCard = function(cardId) {
  console.log("User flipped " + cards[cardId]);
  console.log("User flipped " + cards[cardId]);
  cardsInPlay.push(cards[cardId])
}

flipCard(0);
flipCard(2);
flipCard(checkForMatch(0));
