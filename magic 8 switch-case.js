var userQuestion = prompt('Ask me anything');
var randomNumber = (Math.floor(Math.random() * 7));
var eightBall = '';
switch (randomNumber) {
  case 0:
    (eightBall = 'Yes');
    break;
  case 1:
    (eightBall = 'No');
    break;
  case 2:
    (eightBall = 'Definitly');
    break;
  case 3:
    (eightBall = 'When hell freezes');
    break;
  case 4:
    (eightBall = 'It is a little cloudy');
    break;
  case 5:
    (eightBall = 'Never');
    break;
  case 6:
    (eightBall = 'Most likely');
    break;
  case 7:
    (eightBall = 'It\'s looking good');
    break;
                    }
console.log('You asked: ' + userQuestion);
console.log('Eightball\'s answer is: ' + eightBall);
                         
    