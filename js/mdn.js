//Générer "Element x" en appuyant sur un bouton
let link = document.getElementById('#');

link.addEventListener('click', createPara);

function createPara() {
	let para = document.createElement('span');
	para.textContent = 'Element n°x';
	document.body.appendChild(para);
}

/**
 *
 * 		DEVINER UN NOMBRE
 *
 */

let randomNumber = Math.floor(Math.random() * 100);

let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');

let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');

document.getElementById('myBtn').className = 'btn-js';

let guessCount = 1;
let resetButton;

function checkGuess() {
	let userGuess = Number(guessField.value);

	if (guessCount === 1){
		guesses.textContent = 'Propositions précédentes : ';
	}

	guesses.textContent += userGuess + ' ';

	if (userGuess === randomNumber){
		lastResult.textContent = 'Bravo, vous avez trouvé le nombre !'
		lastResult.className = 'alert-success';
		lowOrHi.textContent = '';
		setGameOver();
	} else if (guessCount === 10){
		lastResult.textContent = '---- PERDU ----';
		setGameOver();
	} else {
		lastResult.textContent = '';
		lastResult.className = 'alert-danger';
		if ( userGuess < randomNumber){
			lowOrHi.textContent = 'Le nombre saisi est trop petit !'
		} else if (userGuess > randomNumber){
			lowOrHi.textContent = 'Le nombre saisi est trop grand !'
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
	resetButton.textContent = 'Start new game';
	document.body.appendChild(resetButton);
	resetButton.addEventListener('click', resetGame);
}

//https://developer.mozilla.org/fr/docs/Learn/JavaScript/First_steps/A_first_splash
