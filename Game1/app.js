document.addEventListener('DOMContentLoaded', () =>{
	//card options
	const cardArray = [
		{
			name: '2-babies',
			img: 'images/2-babies.jpg'
		},
		{
			name: '2-babies',
			img: 'images/2-babies.jpg'
		},
		{
			name: 'be-brilliant',
			img: 'images/be-brilliant.jpg'
		},
		{
			name: 'be-brilliant',
			img: 'images/be-brilliant.jpg'
		},
		{
			name: 'family',
			img: 'images/family.jpg'
		},
		{
			name: 'family',
			img: 'images/family.jpg'
		},
		{
			name: 'twins',
			img: 'images/twins.jpg'
		},
		{
			name: 'twins',
			img: 'images/twins.jpg'
		},

	]

	cardArray.sort(() => 0.5 - Math.random())

	const grid = document.querySelector('.grid')
	const resultDisplay = document.querySelector('#result')
	var cardsChosen = []
	var cardsChosenId = []
	var cardsWon = []

	//create your board
	function createBoard(){
		for(let i = 0; i < cardArray.length; i++){
			var card = document.createElement('img')
			card.setAttribute('src', 'images/camera.jpg')
			card.setAttribute('data-id', i)
			card.addEventListener('click', flipCard)
			grid.appendChild(card)
		}
	}

	//check for matches
	function checkForMatch(){
		var  cards = document.querySelectorAll('img')
		const optionOneId = cardsChosenId[0]
		const optionTwoId = cardsChosenId[1]
		if (cardsChosen[0] === cardsChosen[1]){
			alert('You found a match')
			cards[optionOneId].setAttribute('src', 'images/success.jpg')
			cards[optionTwoId].setAttribute('src', 'images/success.jpg')
			cardsWon.push(cardsChosen)
		}else{
			cards[optionOneId].setAttribute('src', 'images/camera.jpg')
			cards[optionOneId].setAttribute('src', 'images/camera.jpg')
			alert('sorry, try again')
		}

		cardsChosen = []
		cardsChosenId = []
		resultDisplay.textContent = cardsWon.length
		if (cardsWon.length === cardArray.length/2) {
			resultDisplay.textContent = 'Congratulations! You found them all!!!'
		}
	}


	//flipcards
	function flipCard(){
		var cardId = this.getAttribute('data-id')
		cardsChosen.push(cardArray[cardId].name)
		cardsChosenId.push(cardId)
		this.setAttribute('src', cardArray[cardId].img)
		if (cardsChosen.length === 2){
			setTimeout(checkForMatch, 500)
		}
	}

	createBoard()
})