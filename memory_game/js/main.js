console.log("Up and running!");

var cards = [
{cardImage:"queen", front: "images/queen-of-diamonds.png" }, 
{cardImage:"king", front: "images/king-of-hearts.png"},
{cardImage:"queen", front: "images/queen-of-hearts.png" }, 
{cardImage:"king", front: "images/king-of-diamonds.png"}
]

var cardsInPlay = [];

var flipCard = function() {
  var cardId = this.getAttribute("data-id");
  console.log("User flipped " + cards[cardId].cardImage);
  cardsInPlay.push(cards[cardId].cardImage);
  this.setAttribute("src", cards[cardId].front);
}

var createBoard = function() {
  var board = document.getElementById("game-board");
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement("img"); 
    cardElement.setAttribute("src", "images/back.png");
    cardElement.setAttribute("data-id", i);
    cardElement.addEventListener("click", flipCard);
    board.appendChild(cardElement);
}
}

var checkForMatch = function (cardsInPlay) {
 if (cardsInPlay.length === 2 && cardsInPlay[0].cardImage === cardsInPlay[1].cardImage) {
 	alert("You found a match!");
} else {
	alert("Sorry, try again.");
 }
}
//I could not figure out how to get the checkForMatch function to display the alert without refreshing the page... no errors. wtf

createBoard();
checkForMatch(cardsInPlay);


