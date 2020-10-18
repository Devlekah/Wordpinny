window.addEventListener('load', init);


// Available levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 2,
}
;
// To change levels
const currentLevel = levels.easy;

//
let time = currentLevel;
let score = 0;
let isPlaying
//
const wordinput = document.querySelector('#wordinput');
const currentword = document.querySelector('#currentword');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

//
const words = [
  'love',
  'heart',
  'sometimes',
  'somethings',
  'makeover',
  'film',
  'school',
  'hospital',
  'market',
  'training',
  'developer',
  'designer',
  'barcelona',
  'manchester',
  'heavy',
  'magic',
  'runaway',
  'sky',
  'happy',
  'intelligent',
  'marriage',
  'disappointment',
  'encouragement',
  'delight',
  'crazy',
  'clinic',
  'lion',
  'zebra',
  'hippo',
  'kangaroo',
  'leopard',
  'kindom',
  'lizard',
  'monkey',
  'education',
  'finance',
  'ministry',
  'football',
  'sport',
  'president',
];
 // starting game
 function init(){
   // Shownumber of seconds in UI
   seconds.innerHTML = currentLevel;
   showword(words);
   // start match
   wordinput.addEventListener('input', startMatch);
   //Coundown
   setInterval(coundown, 1000);
   //
   setInterval(checkStatus, 50);
 }

// Start match
function startMatch() {
  if(matchWords())
  {
    isPlaying = true;
    time = currentLevel + 1;
    showword(words);
    wordinput.value = '';
    score++;
  }
  // if score is -1, display 0
  if(score === -1)
  {
    scoreDisplay.innerHTML = 0;

  }else {
    scoreDisplay.innerHTML = score;

  }
}

// Match currentword
function matchWords() {
  if(wordinput.value === currentword.innerHTML)
  {
    message.innerHTML = 'Correct';
    return true;
  }else {
    message.innerHTML = '';
    return false;
  }
}

 //
 function showword(words) {
   //
   const rand = Math.floor(Math.random() * words.length);
   //
   currentword.innerHTML = words[rand];
 }
//
function coundown() {
  //
  if(time > 0){
    //
    time--;
  }else if (time === 0) {
    // Game over
    isPlaying = false;
  }
  //Show time timeDisplay
  timeDisplay.innerHTML = time;
}

//
function checkStatus() {
  if(!isPlaying && time === 0)
  {
    message.innerHTML = 'Game Over!';
    score = -1;
  }
}
