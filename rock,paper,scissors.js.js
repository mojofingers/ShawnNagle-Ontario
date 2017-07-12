function getComputerChoice() {

    switch (Math.floor(Math.random() * 3)) {
        case 0: 
            return 'rock';
        case 1:
            return'paper';
        case 2:
            return 'scissors';
    };

};

function determineWinner(userChoice, computerChoice) {
    var result = '';
    // Situation 1
  if (userChoice === computerChoice) 
        result =  'The game is a tie!.'; 
  // Auto win cheat
   else if (userChoice === 'bomb') {
    if (computerChoice === 'rock') 
    if (computerChoice ==='scissors');
    if (computerChoice ==='paper'); 
    result = 'Computer blows up and you win!';
    // Situation 2
  }else if (userChoice === 'rock') { 
        if (computerChoice === 'paper')
            result =  'The computer wins!.';
        else 
            result = 'You win!';
    // Situation 3
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'paper') 
            result = 'You win!';
        else
            result = 'Computer wins!.';
    // Situation 4
    } else {
        if (computerChoice === 'scissors')
            result = 'Computer wins!';
        else 
            result = 'You Win!';
    }
    // END
    return result;
}


function playGame(userChoice) {

    var userChoice = userChoice.toLowerCase();
    var computerChoice = getComputerChoice();

    console.log('You threw: ' + userChoice);
    console.log('Computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}

playGame('Bomb');