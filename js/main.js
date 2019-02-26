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

var updateScore = function() {
	document.getElementById("game-score").textContent = "Score: " + score;
};

var checkForMatch = function() {
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

var flipCard = function() {
	//flip card only if the card has not been flipped yet
	if (this.getAttribute("src") !== cards[this.getAttribute("data-id")].cardImage) {
		this.setAttribute("src", cards[this.getAttribute("data-id")].cardImage);
		cardsInPlay.push(cards[this.getAttribute("data-id")].rank);

		if (cardsInPlay.length === 2) {
			setTimeout(checkForMatch, 800);
		}
	} else {
		alert("You have already flipped this card.");
	}
};

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
	    var cardElement = document.createElement("img");

	    cardElement.setAttribute("src", "images/back.png");
	    cardElement.setAttribute("data-id", i);

	    cardElement.addEventListener("click", flipCard);
	    cardElement.addEventListener("click", function() {
		  	this.style.transform = "rotateY(-360deg)";
		  	this.style.transition = "transform 0.8s";
		  	this.style.transformStyle = "preserve-3d";
		});

	    document.getElementById("game-board").appendChild(cardElement);
	}
};

var resetBoard = function() {
	//reset cards in play
	cardsInPlay = [];

	//remove all the old board of cards
	var parent = document.getElementById("game-board");
	var children = document.getElementsByTagName("img");

	for (var i = 0; i < cards.length; i++) {
		parent.removeChild(children[0]);
	}
	//re-create board of cards to re-setup the game
	createBoard();
};

//create board of cards to set up the game
createBoard();

//include reset button to reset the game
document.getElementById("game-reset").addEventListener("click", resetBoard);





