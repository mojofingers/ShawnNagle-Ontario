function getSleepHours(day) {
  if (day === 'monday') {
    return 8;
   } else if (day === 'tuesday') {
      return 8;
   } else if (day === 'wensday') {
        return 8;
   } else if (day === 'thursday') {
      return 8;
   } else if (day === 'friday') {
      return 8;
   } else if (day === 'saterday') {
      return 8;
   } else if (day === 'sunday') {
      return 8;
   }
}

function getAcualSleepHours() {
  return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wensday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saterday') + getSleepHours('sunday');
// Totals all the hours  of sleep from getSleepHours that the user got
}

function getIdealSleepHours() {
  var idealHours = 7;
  return idealHours * 7;
  // Returns the total number of ideal sleep hours  per week that the user picked
}


function calculateSleepDebt() {
var acualSleepHours = getAcualSleepHours();
var idealSleepHours = getIdealSleepHours();
 
  if (acualSleepHours === idealSleepHours) {
   console.log('You got exacly the amount of sleep you wanted'); 
  } if (acualSleepHours < idealSleepHours); {
        console.log('you got ' + (idealSleepHours - acualSleepHours) + ' hours less then your ideal sleep'); 	
     else if (acualSleepHours > idealSleepHours); {
        console.log('You got ' + (acualSleepHours - idealSleepHours) + ' hours more sleep then you planned');
     }}}

calculateSleepDebt();
