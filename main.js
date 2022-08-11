//Rock Paper Scissors - version1

//Declare user choice automatically
let userChoice = Math.floor(Math.random() * 3);
switch (userChoice) {
  case 0: 
  userChoice = 'scissors';
  break;
  case 1: 
  userChoice = 'stone';
  break;
  case 2: 
  userChoice = 'paper';
  break;
}
console.log (`User Choise is: a ${userChoice}`);

//Declare computer choice automatically
let computerChoice = Math.floor(Math.random() * 3);
switch (computerChoice) {
  case 0: 
  computerChoice = 'scissors';
  break;
  case 1: 
  computerChoice = 'stone';
  break;
  case 2: 
  computerChoice = 'paper';
  break;
}
console.log (`Computer Choise is: a ${computerChoice}`);

//compare user choice and computer choice and console.log result

if (userChoice === computerChoice) {
  console.log ('You have a tie!');
}
else {
if (userChoice === 'scissors') {
  if (computerChoice === 'paper') {
      console.log ('User has win!');
  }
  else {
     console.log ('Computer has win!');
  }
}

if (userChoice === 'stone') {
  if (computerChoice === 'scissors') {
      console.log ('User has win!');
  }
  else {
     console.log ('Computer has win!');
  }
}

if (userChoice === 'paper') {
  if (computerChoice === 'stone') {
     console.log ('User has win!');
  }
  else {
     console.log ('Computer has win!');
  }
}
}

//Rock Paper Scissors Pumba - version2

//Receive User Choise

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'pumba') {
 return userInput;  
  }
  else console.log ('Error');
};
//console.log(getUserChoice('scissors')); // Test function works

//Receive Computer Choise

const getComputerChoice = () => {
  randomNumber = Math.floor(Math.random()*4);
  switch (randomNumber) {
    case 0:
    return 'rock';
    case 1: 
    return 'scissors';
    case 2:
    return 'paper';
    case 3: 
    return 'pumba';
  }
}
//console.log (getComputerChoice()); // Test function works should print 'rock', 'paper', or 'scissors'

//Compare values

function determineWinner (userChoice, computerChoice){
  if (userChoice === computerChoice) {
    return 'You have a tie!';
  }

  if (userChoice==='scissors') {
    if (computerChoice==='paper') {
       return 'User have win!'; 
       }
   else {
      return 'Computer have win!';
      }
  }

  if (userChoice==='paper') {
      if (computerChoice==='rock') {
       return 'User have win!'; }
      else {
       return 'Computer have win!';}
  }

  if (userChoice==='rock') {
      if (computerChoice==='scissors') {
       return 'User have win!'; }
   else {
       return 'Computer have win!';}
  }

  if (userChoice==='pumba') {
       return 'User have win!'; 
       }
if (computerChoice==='pumba') {
       return 'Computer have win!'; 
       }
}
//console.log(determineWinner('paper', 'rock')); Test function works 

//Play game function

const playGame = () => {
 const userChoice = getUserChoice('scissors');
 const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw:' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice)); 
};

playGame();
