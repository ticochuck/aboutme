'use strict'

//Welcome message
alert('Hello. Welcome to the About Me page!');

//get usernmae
var userName = prompt(' Before we get started, please tell us your name :');

// intro message
alert('Hi ' + userName + '! \nMy name is Chuck. So that you can get to know me a little better, I am going to ask you a few questions about myself. \nTry guessing all the correct answers! There will be a score at the end. Good luck!');

var correctAnswers = 0;

//Question #1
function questOne(){
for (var i = 0; i < 3; i++) {
  var question1 = prompt('Question #1. \nAm I from Puerto Rico?');
  if ((question1.toLowerCase() === 'no') || (question1.toLowerCase() === 'n')) {
    console.log('CORRECT! \nI was born and raised in Costa Rica!');
    alert('CORRECT! \nI was born and raised in Costa Rica!');
    break;
  } else if ((question1.toLowerCase() === 'yes') || (question1.toLowerCase() === 'y')) {
    console.log('Incorrect :( \nClose but not really. I was born and raised in Costa Rica.');
    alert('Incorrect :( \nClose but not really. I was born and raised in Costa Rica.');
    break;
  } else {
    if (i < 2) {
      alert('That is not a valid answer. Please enter "yes" or "no".');  
    } else if (i === 2) {
        alert('That is not a valid answer. The correct answer is "no", Chuck is from Costa Rica.');
      }
    }
} 
}
questOne();


//Question #2
function questTwo(){
var question2 = prompt('Question #2. \nAm I chinese?');
if ((question2.toLowerCase() === 'yes') || (question2.toLowerCase() === 'y')) {
  //console.log('CORRECT! \nMy dad is from China and my mom is from Costa Rica. That makes me a rare Chinese-Costarican!');
  alert('CORRECT! \nMy dad is from China and my mom is from Costa Rica. That makes me a rare -Chinese-Costarican!');
  correctAnswers ++;
} else if ((question2.toLowerCase() === 'no') || (question2.toLowerCase() === 'n')) {
  //console.log('Incorrect :( \nEven though I was born in Costa Rica, my dad is from China, so that makes me a rare Chinese-Costarican!');
  alert('Incorrect :( \nEven though I was born in Costa Rica, my dad is from China, so that makes me a rare Chinese-Costarican!');
}
}
questTwo();
 
//Question #3
function questThree(){
var question3 = prompt('Question #3. \nDo I like burgers?');
if ((question3.toLowerCase() === 'yes') || (question3.toLowerCase() === 'y')) {
  //console.log('CORRECT! \nI love burgers. I can eat one every day!!');
  alert('CORRECT! \nI love burgers. I can eat one every day!!');
  correctAnswers ++;
} else if ((question3.toLowerCase() === 'no') || (question3.toLowerCase() === 'n')) {
  //console.log('Incorrect :( \nWho doesn\'t love burgers?? I love burgers, well done and no onions please!');
  alert('Incorrect :( \nWho doesn\'t love burgers?? I love burgers, well done and no onions please!');
}
}
questThree();

//Question #4
function questFour(){
var question4 = prompt('Question #4. \nDo I have 4 kids under 6 years old?');
if ((question4.toLowerCase() === 'no') || (question4.toLowerCase() === 'n')) {
  //console.log('CORRECT! \nI ONLY have 3 kids under 6 years old');
  alert('CORRECT! \nI ONLY have 3 kids under 6 years old');
  correctAnswers ++;
} else if ((question4.toLowerCase() === 'yes') || (question4.toLowerCase() === 'y')) {
  //console.log('Incorrect :( \nWhat are you thinking, ' + userName + '? That would be crazy... I ONLY have 3 kids 6 and under...');
  alert('Incorrect :( \nWhat are you thinking, ' + userName + '? That would be crazy... I ONLY have 3 kids 6 and under...');
}
}
questFour();


//Question #5
var question5 = prompt('Question #5. \nAm I married?');
if ((question5.toLowerCase() === 'yes') || (question5.toLowerCase() === 'y')) {
  //console.log('CORRECT! \nAnd actually, this year me and my wife Laura are celebrating our 10th anniversary');
  alert('CORRECT! \nAnd actually, this year me and my wife Laura are celebrating our 10th anniversary');
  correctAnswers ++;
} else if ((question5.toLowerCase() === 'no') || (question5.toLowerCase() === 'n')) {
  //console.log('Incorrect :( \nMy wife Laura and I have been married for 10 years.');
  alert('Incorrect :( \nMy wife Laura and I have been married for 10 years.');
}

//Question #6
var myGrandmaAge = '91';
//give user 4 chances to get the correct answer
for (var i = 1; i < 5; i++) {
var question6 = prompt('How old is my grandma?');
  if (question6 === myGrandmaAge) {
    correctAnswers ++;
    if (i === 1) {
      alert('Awesome, you guessed it on your ' + i + 'st try');
    } else if (i === 2) {
      alert('Awesome, you guessed it on your ' + i + 'nd try');
    } else {
      alert('Awesome, you guessed it on your ' + i + 'th try');
    }
      break;  
    } else if (question6 > myGrandmaAge) {
      alert('too high. Try again')
  } else if (question6 < myGrandmaAge) {
    alert('too low. Try again');
  }
}
//if user does not guess in 4 attemps
if (i > 4 ) { 
  alert('Sorry, you ran out of chances. My grandma is ' + myGrandmaAge + ' years old.');
}

//Question #7
var favoriteRestaurant = ['red robin', 'red mill', 'dicks']
console.log('favoriteRestaurant array = ' + favoriteRestaurant);
//first loop is for 6 attemps to get the correct answer
for (var j = 0; j < 6; j++) {
  var question7 = prompt('What is my favorite burger restaurant?');
  //this second loop is to go through the entire array 
  for (var x = 0; x < favoriteRestaurant.length; x++) {
  console.log('this is faverestaurant[x] = ' + favoriteRestaurant[x]);
    if (question7.toLowerCase() === favoriteRestaurant[x]) {
      alert('YES, ' + favoriteRestaurant + ' are some of my favorite burger restaurants');
      correctAnswers ++;
      var alreadyGuessed = true; //if guessed, exit the loop 
      break;
    }
  } 
  if (alreadyGuessed === true) {
    j = 6;
  } else if (j < 5) {
    alert('Nope. try again');
  } else if (j === 5) {
      alert('Sorry, you run out of chances');
  }
}

alert('Thank you for playing ' + userName + '! You got ' + correctAnswers + ' correct answers out of 7. See you next time!');

