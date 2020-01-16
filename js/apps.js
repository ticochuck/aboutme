'use strict'

//Welcome message
alert('Hello. Welcome to the About Me page!');

//get usernmae
var userName = prompt(' Before we get started, please tell us your name :');

//final message
alert('Hi ' + userName + '! \nMy name is Chuck. So that you can get to know me a little better, I am going to ask you 5 (yes or no) questions about myself. \nTry guessing all the correct answers! Good luck!');

//Question #1
var question1 = prompt('Question #1. \nAm I from Puerto Rico?');
if ((question1.toLowerCase() === 'no') || (question1.toLowerCase() === 'n')) {
  console.log('CORRECT! \nI was born and raised in Costa Rica!');
  alert('CORRECT! \nI was born and raised in Costa Rica!');
} else if ((question1.toLowerCase() === 'yes') || (question1.toLowerCase() === 'y')) {
  console.log('Incorrect :( \nClose but not really. I was born and raised in Costa Rica.');
  alert('Incorrect :( \nClose but not really. I was born and raised in Costa Rica.');
} 
//Question #2
var question2 = prompt('Question #2. \nAm I chinese?');
if ((question2.toLowerCase() === 'yes') || (question2.toLowerCase() === 'y')) {
  console.log('CORRECT! \nMy dad is from China and my mom is from Costa Rica. That makes me a rare Costarican-Chinese!');
  alert('CORRECT! \nMy dad is from China and my mom is from Costa Rica. That makes me a rare Costarican-Chinese!');
} else if ((question2.toLowerCase() === 'no') || (question2.toLowerCase() === 'n')) {
  console.log('Incorrect :( \nEven though I was born in Costa Rica, my dad is from China, so that makes me a rare Costarican-Chinese!');
  alert('Incorrect :( \nEven though I was born in Costa Rica, my dad is from China, so that makes me a rare Costarican-Chinese!');
}
 
//Question #3
var question3 = prompt('Question #3. \nDo I like burgers?');
if ((question3.toLowerCase() === 'yes') || (question3.toLowerCase() === 'y')) {
  console.log('CORRECT! \nI love burgers. I can eat one every day!!');
  alert('CORRECT! \nI love burgers. I can eat one every day!!');
} else if ((question3.toLowerCase() === 'no') || (question3.toLowerCase() === 'n')) {
  console.log('Incorrect :( \nWho doesn\'t love burgers?? I love burgers, well done and no onions please!');
  alert('Incorrect :( \nWho doesn\'t love burgers?? I love burgers, well done and no onions please!');
}

//Question #4
var question4 = prompt('Question #4. \nDo I have 4 kids under 6 years old?');
if ((question4.toLowerCase() === 'no') || (question2.toLowerCase() === 'n')) {
  console.log('CORRECT! \nI ONLY have 3 kids under 6 years old');
  alert('CORRECT! \nI ONLY have 3 kids under 6 years old');
} else if ((question4.toLowerCase() === 'yes') || (question4.toLowerCase() === 'y')) {
  console.log('Incorrect :( \nWhat are you thinking, ' + userName + '? That would be crazy... I ONLY have 3 kids 6 and under...');
  alert('Incorrect :( \nWhat are you thinking, ' + userName + '? That would be crazy... I ONLY have 3 kids 6 and under...');
}

//Question #5
var question5 = prompt('Question #5. \nAm I married?');
if ((question5.toLowerCase() === 'yes') || (question5.toLowerCase() === 'y')) {
  console.log('CORRECT! \nAnd actually, this year me and my wife Laura are celebrating our 10th anniversary');
  alert('CORRECT! \nAnd actually, this year me and my wife Laura are celebrating our 10th anniversary');
} else if ((question5.toLowerCase() === 'no') || (question5.toLowerCase() === 'n')) {
  console.log('Incorrect :( \nMy wife Laura and I have been married for 10 years.');
  alert('Incorrect :( \nMy wife Laura and I have been married for 10 years.');
}

alert('Thank you for playing ' + userName + '! See next time.');


