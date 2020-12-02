
console.log('Javascript running');


var suits = ['spades', 'clubs', 'hearts', 'diamonds'];
var ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];

var deck = new Array();



// Creates a new deck, unshuffled
function createDeck()
{
	deck = new Array();

	for (var i = 0; i < suits.length; i++)
	{
		for (var j = 0; j < ranks.length; j++)
		{
			var weight = parseInt(ranks[j]);

			if (ranks[j] == 'J' || ranks[j] == 'Q' || ranks[j] == 'K')
			{
				weight = 10;
			}
			if (ranks[j] == 'A')
			{
				weight = 11;
			}

			var card = {rank: ranks[j], suit: suits[i], weight: weight};
			deck.push(card);
		}
	}
}


// Shuffles a deck
function shuffleDeck()
{
	for (var i = 0; i < 1000; i++)
	{
		position1 = Math.floor(Math.random() * deck.length);
		position2 = Math.floor(Math.random() * deck.length);

		var temp = deck[position1];
		deck[position1] = deck[position2];
		deck[position2] = temp;
	}

}

// Create Players
var players = new Array();
function createPlayers(numPlayers)
{
	for (var i = 0; i < numPlayers; i++)
	{
		var hand = new Array();

		var player = {number: i, points: 0, hand: hand};

		players.push(player);
	}
}

function drawCard()
{
	var drawnCard = deck.pop();
	console.log(drawnCard);

	return drawnCard;
}

function displayCards()
{

	for (var j = 0; j < players.length; j++)
	{
		for (var i = 0; i < players[j]["hand"].length; i++)
		{
			var rank = players[j]["hand"][i].rank;
			var suit = players[j]["hand"][i].suit;

			var img = document.createElement("img");
			img.src="cards/" + rank + "_of_" + suit + ".png";
			img.weight=120;
			img.height=180;
			img.id=players[i] + "_" + [j];
			var divPlayer = document.getElementById("player" + players[j]["number"]);
			divPlayer.appendChild(img);
		}
	}	

}


function startGame()
{
	createDeck();
	shuffleDeck();
	createPlayers(2);

	player0_1 = drawCard();
	player1_1 = drawCard();
	player0_2 = drawCard();
	player1_2 = drawCard();

	players[0]["hand"].push(player0_1);
	players[1]["hand"].push(player1_1);
	players[0]["hand"].push(player0_2);
	players[1]["hand"].push(player1_2);

	displayCards();






}

startGame();










for (var i = 0; i < 48; i++)
{
	console.log(deck[i].weight)
}



