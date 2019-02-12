var cards = [
	{
		rank: 'queen',
		suit: 'hearts',
		cardImage: 'images/queen-of-hearts.png'
	},
	{
		rank: 'queen',
		suit: 'diamonds',
		cardImage: 'images/queen-of-diamonds.png'
	},
	{
		rank: 'king',
		suit: 'hearts',
		cardImage: 'images/king-of-hearts.png'
	},
	{
		rank: 'king',
		suit: 'diamonds',
		cardImage: 'images/king-of-diamonds.png'
	}
];

var score = 0;
var cardsInPlay = [];


var checkForMatch = function(){
	if (cardsInPlay.length === 2){
		if (cardsInPlay[0] === cardsInPlay[1]){
			alert("You found a match!");
			score += 1;
			updateScore();
		} else {
			alert("Sorry, try again."); 
		}
	}
};

var flipCard = function(){
	this.setAttribute("src", cards[this.getAttribute("data-id")].cardImage);
	cardsInPlay.push(cards[this.getAttribute("data-id")].rank);

	if (cardsInPlay.length === 2){
		setTimeout(checkForMatch, 300);
	}
};

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
	    var cardElement = document.createElement("img");

	    cardElement.setAttribute("src", "images/back.png");
	    cardElement.setAttribute("data-id", i);
	    cardElement.addEventListener("click", flipCard);

	    document.getElementById("game-board").appendChild(cardElement);
	}
};

var resetBoard = function() {
	cardsInPlay = [];

	for (var i = 0; i < cards.length; i++) {
	    var cardElements = document.getElementsByTagName("img");
	    cardElements[i].setAttribute("src", "images/back.png");
	}
};

var updateScore = function() {
	document.getElementById("game-score").textContent = "Score: " + score;
};

//create board of cards to set up the game
createBoard();

//configure reset button to reset the game
document.getElementById("game-reset").addEventListener("click", resetBoard);





