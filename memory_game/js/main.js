
var cards = ["queen" , "queen" , "king" , "king"];
var cardsInPlay = [];
var cardOne = cards[1];
cardsInPlay.push(cardOne);
var cardTwo = cards[0];
cardsInPlay.push(cardTwo);

if (cardsInPlay.length === 2 && cardOne === cardTwo) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}


console.log("User Flipped " + cardOne);
console.log("User Flipped " + cardTwo);

