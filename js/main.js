var startBtn = document.getElementById('startBtn');
var container = document.querySelector('.container');
var circle = document.querySelector('.circle');
var player1Score = document.getElementById('player1Score');
var player2Score = document.getElementById('player2Score');
var player1Div = document.querySelector('.player1');
var player2Div = document.querySelector('.player2');
var player1Name = document.getElementById('player1Name');
var player2Name = document.getElementById('player2Name');
var player1Current = document.getElementById('player1Current');
var player2Current = document.getElementById('player2Current');
var player1Btn = document.getElementById('player1Btn');
var player2Btn = document.getElementById('player2Btn');
var startAgainBtn = document.getElementById('startAgainBtn');
var newPlayersBtn = document.getElementById('newPlayersBtn');
var player1 = '';
var player2 = '';
var player1TotalScore = 0;
var player2TotalScore = 0;
var rollingCounter = 1;

startBtn.addEventListener('click', askForNames);
startAgainBtn.addEventListener('click',clearInputs);
newPlayersBtn.addEventListener('click', newPlayers);

function askForNames() {
	player1 = prompt('Unesite vase ime');
	player2 = prompt('Unesite vase ime');
	displayGame();
}
function displayGame() {
	startBtn.style.display = 'none';
	container.style.display = 'block';
	player1Name.innerHTML = player1;
	player2Name.innerHTML = player2;
	player1Btn.addEventListener('click', player1Roll);
	player2Btn.addEventListener('click', player2Roll);
}
function player1Roll() {
	rollingCounter += 0.5;

	this.setAttribute('disabled', 'disabled');
	player2Btn.removeAttribute('disabled');
	var rand = Math.floor(Math.random() * 6 + 1);
	player1TotalScore += rand;
	player1Current.innerHTML = rand;
	player1Score.innerHTML = player1TotalScore;
	if (Math.floor(rollingCounter) < 11) {
		circle.innerHTML = Math.floor(rollingCounter);
	} else {
		gameOver();
	}
}
function player2Roll() {
	rollingCounter += 0.5;

	this.setAttribute('disabled', 'disabled');
	player1Btn.removeAttribute('disabled');
	var rand = Math.floor(Math.random() * 6 + 1);
	player2TotalScore += rand;
	player2Current.innerHTML = rand;
	player2Score.innerHTML = player2TotalScore;
	if (Math.floor(rollingCounter) < 11) {
		circle.innerHTML = Math.floor(rollingCounter);
	} else {
		gameOver();
	}
}
function gameOver() {
	player1Btn.setAttribute('disabled', 'disabled');
	player2Btn.setAttribute('disabled', 'disabled');
	startAgainBtn.style.display = 'block';
	newPlayersBtn.style.display = 'block';
	if (player1TotalScore > player2TotalScore) {
		player1Div.style.background = '#5cb85c';
	} else if (player1TotalScore < player2TotalScore) {
		player2Div.style.background = '#5cb85c';
	} else {
		player1Div.style.background = "#c9302c";
    player2Div.style.background = "#c9302c";
	}
}
function clearInputs() {
	rollingCounter = 1;

	player1Current.innerHTML = '0';
	player2Current.innerHTML = '0';
	player1Score.innerHTML = '0';
	player2Score.innerHTML = '0';
	player1Btn.removeAttribute('disabled');
	player2Btn.removeAttribute('disabled');
	player1Div.style.background = 'none';
	player2Div.style.background = 'none';
	startAgainBtn.style.display = 'none';
	newPlayersBtn.style.display = 'none';
	player1TotalScore = 0;
	player2TotalScore = 0;
	circle.innerHTML = '1';
}
function newPlayers() {
	container.style.display = 'none';
	startAgainBtn.style.display = 'none';
	newPlayersBtn.style.display = 'none';
	startBtn.style.display = 'block';
	clearInputs();
}





