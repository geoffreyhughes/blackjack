
console.log('Javascript running');


var suits = ['spades', 'clubs', 'hearts', 'diamonds'];
var ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

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

	return deck;
}


// Shuffles a deck
function shuffleDeck(deck)
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

deck1 = createDeck();
console.log(deck1[19].weight);

shuffleDeck(deck1);