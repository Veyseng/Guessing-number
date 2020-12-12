'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function(message){
	document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
	document.querySelector('.guess').value;
	const guess = Number(document.querySelector('.guess').value);
	//When the user doesn't input any number
	if( !guess ){
		displayMessage('No number!');
	}
	//When the guess number is equal to secret number
	else if( guess === secretNumber){
		displayMessage('Correct number')
		document.querySelector('.number').textContent = secretNumber;
		document.querySelector('body').style.backgroundColor = '#60B347';
		document.querySelector('.number').style.width = '30rem';
		if(score > highScore){
			highScore = score;
			document.querySelector('.highscore').textContent = highScore;
		}
	}
	else if (guess !== secretNumber){
		if(score > 1){
			guess > secretNumber ? displayMessage('Too high!') : displayMessage('Too low!') ;
			score--;
			document.querySelector('.score').textContent = score;
		}
		else{
			displayMessage('You lost the game!');
			document.querySelector('.score').textContent = 0;
		}
	}

});

document.querySelector('.again').addEventListener('click', function(){
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	score = 20;
	document.querySelector('.score').textContent = score;
	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').style.width = '15rem';
	document.querySelector('.number').textContent = '?';
	document.querySelector('.guess').value = null;
	displayMessage('Start guessing...');
});

