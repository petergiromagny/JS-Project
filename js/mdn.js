//Générer "Element x" en appuyant sur un bouton
/*let link = document.getElementById('#');

link.addEventListener('click', createPara);

function createPara() {
	let para = document.createElement('span');
	para.textContent = 'Element n°x';
	document.body.appendChild(para);
}*/

/**
 *
 * 		DEVINER UN NOMBRE
 *
 */

//let randomNumber = Math.floor(Math.random() * 100);
let randomNumber = 15;

let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');

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
	document.getElementById('body').appendChild(resetButton);
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

//https://developer.mozilla.org/fr/docs/Learn/JavaScript/First_steps/A_first_splash
