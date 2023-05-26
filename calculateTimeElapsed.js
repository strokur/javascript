function calculateTimeElapsed(dateTimeString) {
  var startTime = new Date(dateTimeString);
  var currentTime = new Date();
  var timeElapsed = currentTime - startTime;
  
  var minute = 60 * 1000;
  var hour = 60 * minute;
  var day = 24 * hour;
  var week = 7 * day;
  var month = 30 * day;
  var year = 365 * day;
  
  if (timeElapsed >= year) {
    return Math.floor(timeElapsed / year) + 'y';
  } else if (timeElapsed >= month) {
    return Math.floor(timeElapsed / month) + 'mo';
  } else if (timeElapsed >= week) {
    return Math.floor(timeElapsed / week) + 'w';
  } else if (timeElapsed >= day) {
    return Math.floor(timeElapsed / day) + 'd';
  } else if (timeElapsed >= hour) {
    return Math.floor(timeElapsed / hour) + 'h';
  } else {
    return Math.floor(timeElapsed / minute) + 'm';
  }
}

// Example usage
var dateTimeString = '12/09/2022 12:11:51';
var timeElapsed = calculateTimeElapsed(dateTimeString);

console.log(timeElapsed);