

  var userQuestion = prompt('Ask me anything');
var randomNumber = (Math.floor(Math.random() * 8));
var eightBall = '';
if (randomNumber == 1)eightBall = 'yes you will'; {
  
} if (randomNumber == 2)eightBall = 'you will die a painful death'; {

  
} if (randomNumber == 3)eightBall = 'definitly not'; {
  
} if (randomNumber == 4)eightBall = 'your future looks clouded'; {
  
} if (randomNumber == 5)eightBall = 'more then you can imagin'; {
  
} if (randomNumber == 6)eightBall = 'mabye';{ 
  
} if (randomNumber == 0)eightBall = 'yes'; {
  
} if (randomNumber == 7)eightBall = 'I would not put money on it' ; 

console.log('you asked: ' + userQuestion);
console.log('The eight ball answered: ' + eightBall);
