
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

			if (ranks[j] == 'Jack' || ranks[j] == 'Queen' || ranks[j] == 'King')
				weight = 10;
				
			if (ranks[j] == 'Ace')
				weight = 11;

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
		var hands = new Array();
		var hand = new Array();

		hands[0] = hand;

		var player = {number: i, points: 0, hands: hands};

		players.push(player);
	}
}

function drawCard(playerNum, handNumber)
{
	var drawnCard = deck.pop();

	players[playerNum]["hands"][handNumber].push(drawnCard);
	players[playerNum]["points"] += drawnCard["weight"];
	console.log(deck.length + " cards left");
	console.log("hands: " + players[playerNum]["hands"][handNumber]);
	console.log(players[playerNum]["points"]);

	

	// may want to remove console log to prevent player from inspecting the hidden card element
	console.log(drawnCard);
	console.log(players[playerNum]);
}

function displayCards()
{

	for (var j = 0; j < players.length; j++)
	{
		for (var i = 0; i < players[j]["hands"].length; i++)
		{
			for (var k = 0; k < players[j]["hands"][i].length; k++)
			{

				var rank = players[j]["hands"][i][k].rank;
				var suit = players[j]["hands"][i][k].suit;
	
				var img = document.createElement("img");
				img.src="cards/" + rank + "_of_" + suit + ".png";
				img.weight=120;
				img.height=180;
				img.id="player" + players[j]["number"] + "_" + i + "_" + k;
				console.log(img.id);
				var divPlayer = document.getElementById("player" + players[j]["number"] + "_" + i);
	
				if (j == 0 && i == 0 && k == 1)
				{
					var back = document.createElement("img");
					back.src="cards/GeoffsHouse.png";
					back.weight=120;
					back.height=180;
					divPlayer.appendChild(back);
				}
	
				else 
				{
					divPlayer.appendChild(img);
				}

			}


		}

		var playerPointsDiv = document.createElement("div");
		var playerPoints = document.createTextNode("Total: " + players[j]["points"]);
		playerPointsDiv.appendChild(playerPoints);
		divPlayer.appendChild(playerPointsDiv);
	}	

}

function clearCards()
{
	// may need to add hand based logic 
	clearBox("player0_0");
	clearBox("player1_0");
}

function clearBox(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}

function hit(playerNumber, handNumber)
{
	console.log("HIT ME BABY ONE MORE TIME");
	drawCard(playerNumber, handNumber);

	var cardNumber = players[playerNumber]["hands"][handNumber].length;

	console.log(players[playerNumber]["hands"][handNumber])

	clearCards();
	displayCards();
	// // TODO: add hand logic with HTML, add card to the cooresponding hand that was hit

}



// function stay(playerNumber, handNumber)
// {

// }

// function split(playerNumber, handNumber)
// {

// }



// Creates deck, players, and deals initial cards
function startGame()
{
	createDeck();
	shuffleDeck();
	createPlayers(2);

	drawCard(0, 0);
	drawCard(1, 0);
	drawCard(0, 0);
	drawCard(1, 0);


	displayCards();
}


