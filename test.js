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
var getAcualSleepHours = (getSleepHours()('monday') + getSleepHours()('tuesday') + getSleepHours()('wensday') + getSleepHours()('thursday') + getSleepHours()('friday') + getSleepHours()('saterday') + getSleepHours()('sunday'));
return  getAcualSleepHours();
}

function getIdealSleepHours() {
  var idealHours = 7;
  return idealHours * 7;
}


function calculateSleepDebt() {
var acualSleepHours = getAcualSleepHours();
var idealSleepHours = getIdealSleepHours();
  if (acualSleepHours === idealSleepHours) {
   console.log('You got exacly the amount of sleep you wanted');
 }
  if (acualSleepHours < idealSleepHours); {
   console.log('you got ' + (idealSleepHours - acualSleepHours) + 'hours less then your ideal sleep');
 }
  if (acualSleepHours > idealSleepHours);
   console.log('You got ' + (acualSleepHours - idealSleepHours) + 'more sleep then you planned');
 }
calculateSleepDebt();
