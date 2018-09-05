window.addEventListener('load', init);

//globals

//levels
var levels ={
	easy: 5,
	medium: 3,
	hard: 2
}

//To change level
var currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;


//DOM Elements
const wordinput = document.querySelector('#word-input')
const currentword = document.querySelector('#current-word')
const scoreDisplay = document.querySelector('#score')
const timeDisplay = document.querySelector('#time')
const message = document.querySelector('#message')
var seconds = document.querySelector('#seconds')

const words = [
'raman',
'Drsehgal',
'Aman',
'mani',
'romy',
'gagu',
'ballu',
'love',
'mantej',
'Aman2',
'Gopy',
'Prince',
'Deepu',
'prabh',
'prabhjit',
'mani',
'giddr',
'Akshay',
'Pardeep',
'Navi',
'sukh',
'vivek',
'kiran',
'Shaurya',
'bains',
'developer',
'tester',
'Quality',
'Rajwinder',	
'javascript'];

//game start
function init(){
	//load word fromm array
	ShowWord(words);
//start matching on word input
	wordinput.addEventListener('input', startMatch);

//call countdown every second
	setInterval(countdown, 1000);
	//status
	setInterval(checkStatus, 50);
}
//start match
function startMatch(){
	if(matchwords()){
		isPlaying = true;
		time = currentLevel + 1;
		ShowWord(words);
		wordinput.value = '';
		score++;
	}

	//if score -1 display zero
	if(score === -1){
					scoreDisplay.innerHTML = 0;
	}else{
			scoreDisplay.innerHTML = score;
	}
}

//match current word to wordinput
function matchwords(){
	if(wordinput.value === currentword.innerHTML){
			message.innerHTML = 'whoa';
			return true;
		}
	else {
				message.innerHTML = '';
				return false;
		}
			
}
//pick and show random word
function ShowWord(words)
{
	//generate random array index
	const randIndex = Math.floor(Math.random() * words.length);
	//output random word
	currentword.innerHTML = words[randIndex];
	
}

//countdown timer
function countdown(){
	if(time > 0){
		time--;
	}
	else if(time === 0) 
	{
		isPlaying = false;
	}
	//show time
	timeDisplay.innerHTML = time;
}
//check status
function checkStatus()
{
	if(!isPlaying && time === 0)
	{
		message.innerHTML = "Game Over!!!";
		score = -1;	
	}
}

//for levels
function easy()
{
	currentLevel = levels.easy;
	seconds.innerHTML = levels.easy;
}

function medium(){
	currentLevel = levels.medium;
	seconds.innerHTML = currentLevel;
}

function hard(){
	currentLevel = levels.hard;
	seconds.innerHTML = levels.hard;
}
