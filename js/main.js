/**
 *
 * 		DEVINER UN NOMBRE
 *
 */

let randomNumber = Math.floor(Math.random() * 100);

let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');
let resetBtn = document.querySelector('.reset-btn');

guesses.classList.add('d-none');
lastResult.classList.add('d-none');
lowOrHi.classList.add('d-none');

let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');

document.getElementById('myBtn').className = 'btn-js btn guessSubmit';

let guessCount = 1;
let resetButton;

function checkGuess(){
	let userGuess = Number(guessField.value);
	if (guessCount === 1) {
		guesses.classList.remove('d-none');
		guesses.textContent = 'Propositions précédentes : ';
	} else if (guessCount >= 2){
		guesses.textContent += ' - ';
	}
	guesses.textContent += userGuess;


	if (userGuess === randomNumber) {
		lastResult.textContent = 'Bravo, vous avez trouvé le nombre !';
		lastResult.classList.remove('alert-danger');
		lastResult.classList.remove('d-none');
		lastResult.classList.add('alert-success');
		setGameOver();
	} else if (guessCount === 10) {
		lastResult.textContent = '!!! PERDU !!!';
		setGameOver();
	} else {
		lastResult.textContent = 'Faux !';
		lastResult.classList.remove('d-none');
		lastResult.classList.add('alert-danger');
		if (userGuess < randomNumber) {
			lowOrHi.classList.remove('d-none');
			lowOrHi.textContent = 'Le nombre saisi est trop petit !';
		} else if (userGuess > randomNumber) {
			lowOrHi.classList.remove('d-none');
			lowOrHi.textContent = 'Le nombre saisi est trop grand !';
		}
	}

	guessCount++;
	guessField.value = '';
	guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
	guessField.disabled = true;
	guessSubmit.disabled = true;
	resetButton = document.createElement('button');
	resetButton.textContent = 'Démarrer une nouvelle partie';
	resetButton.className = 'btn-js btn';
	resetBtn.appendChild(resetButton);
	resetButton.addEventListener('click', resetGame);
}

function resetGame() {
	guessCount = 1;

	let resetParas = document.querySelectorAll('.resultParas p');
	for (let i = 0 ; i < resetParas.length ; i++) {
		resetParas[i].textContent = '';
	}

	resetButton.parentNode.removeChild(resetButton);

	guessField.disabled = false;
	guessSubmit.disabled = false;
	guessField.value = '';
	guessField.focus();

	guesses.classList.add('d-none');
	lastResult.classList.add('d-none');
	lowOrHi.classList.add('d-none');

	randomNumber = Math.floor(Math.random() * 100) + 1;
}

/*
*
*  Gérer une liste et l'afficher
*
*  Chaine remis en place
*
*/

let list = document.querySelector('.list-1');
let resultList = document.querySelector('.result-1');

let cityDefault = [
					'lonDon',
					'ManCHESTer',
					'BiRmiNGHAM',
					'liVERpoOL'
				];

for (let i = 0; i < cityDefault.length; i++){
	let result = cityDefault[i].toLowerCase();
	let firstLetter = result.substr(0,1).toUpperCase();
	let otherLetter = result.substr(1, result.length);
	let listCity = document.createElement('p');
	let resultListCity = document.createElement('p');

	listCity.textContent = cityDefault[i];
	resultListCity.textContent = firstLetter + otherLetter;
	list.appendChild(listCity);
	resultList.appendChild(resultListCity);

}

/*
* Récupération charactére
*/

let listInfoStation = document.querySelector('.list-2')
let resultListInfoStation = document.querySelector('.result-2');

let trainInfo = [
					'MAN675847583748sjt567654;Manchester Piccadilly',
					'GNF576746573fhdg4737dh4;Greenfield',
					'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
					'SYB4f65hf75f736463;Stalybridge',
					'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
				];

for (let j = 0; j < trainInfo.length; j++){
	let oneInfo = trainInfo[j];
	let listInfoFinal = document.createElement('p');
	let resultListInfoFinal = document.createElement('p');
	let cityName = oneInfo.substring(0, 3);
	let nbrPoint = oneInfo.indexOf(';');
	let stationName = oneInfo.substr(nbrPoint + 1, oneInfo.length);

	listInfoFinal.textContent = oneInfo;
	resultListInfoFinal.textContent = cityName + ' : ' + stationName;
	listInfoStation.appendChild(listInfoFinal);
	resultListInfoStation.appendChild(resultListInfoFinal);
}

/*
*
*  Gérer un tableau
*
*  Afficher les produits
*
*/

let listProducts = document.querySelector('.products .list-products');
let totalList = document.querySelector('.products .total h3')
let total = 0;
let products = [
					'Caleçons:6.99',
					'Chaussettes:5.99',
					'T-shirt:14.99',
					'Pantalons:31.99',
					'Chaussures:23.99'
				];

totalList.textContent = '';

for (let i = 0; i < products.length; i++){

	let subArray = products[i].split(':');
	let nameProduct = subArray[0];
	let priceProduct = Number(subArray[1]);
	let itemText = nameProduct +' - '+ priceProduct +'$';
	let listItem = document.createElement('p');

	total += priceProduct;

	listItem.textContent = itemText;
	listProducts.appendChild(listItem);
}

totalList.textContent = 'Total : ' + total.toFixed(2) +'$';

/*
* Liste des recherches effectuée
*/

let listSearch = document.querySelector('.search-list ul');
let searchInput = document.querySelector('.search input');
let searchBtn = document.querySelector('.search button');
let myHistory = [];

listSearch.innerHTML = '';

searchBtn.onclick = function() {
	// we will only allow a term to be entered if the search input isn't empty
	if (searchInput.value !== '') {
		// add input value in array myHistory with push()
		myHistory.push(searchInput.value);
		// empty the list so that we don't display duplicate entries
		// the display is regenerated every time a search term is entered.
		listSearch.innerHTML = '';

		// loop through the array, and display all the search terms in the list
		for (var i = 0; i < myHistory.length; i++) {
			itemText = myHistory[i];
			var listItem = document.createElement('li');
			listItem.textContent = itemText;
			listSearch.appendChild(listItem);
		}

		// If the array length is 5 or more, remove the oldest search term
		if (myHistory.length >= 5) {
			// number 2
			myHistory[0].pop();
		}

		// empty the search input and focus it, ready for the next term to be entered
		searchInput.value = '';
		searchInput.focus();
	}
}