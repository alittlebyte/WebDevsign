function currentTime() {
  var date = new Date(); // Initiate a Date object, that holds information in the format of 'May 9, 19 10:17:36'

  var current = date.getDate(); // Get current day, number
  var day = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date); // Day of the week, as a string. This specific method allows for it. Same with month
  var month = new Intl.DateTimeFormat("en-US", { month: "long" }).format(date);
  var year = date.getFullYear();

  var hour = date.getHours();
  var hourText = 'hour';
  var hourSuffix = "s";

  var min = date.getMinutes();
  var minText = 'minute';
  var minSuffix = "s";

  var sec = date.getSeconds();
  var secText = 'second';
  var secSuffix = "s";

  var suffix = ""; // Certain days of the week won't have this part, when displayed. Goes after the number of the day

  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);

  switch (current) {
    case 1: case 21:
      suffix = "st";
      break;
    case 2: case 22:
      suffix = "nd";
      break;
    case 3: case 23:
      suffix = "rd";
      break;
    default:
      suffix = "th";
      break;
  } 
  
  switch (hour) {
    case "01": case 21: case 31: case 41: case 51: 
      hourSuffix = "";
      break;
  }
    
  switch (min) {
    case "01": case 21: case 31: case 41: case 51: 
      minSuffix = "";
      break;
  }
    
  switch (sec) {
    case "01": case 21: case 31: case 41: case 51: 
      secSuffix = "";
      break;
  }// Regular conditional wouldn't work, same for multiple values or multiple cases at once. Just have to keep it all separate.

  document.getElementById("year").innerText = `The year's ${year}.`;
  document.getElementById("today").innerText = `Today is the ${current}${suffix} of ${month}, ${day}`;
  document.getElementById("hours").innerText = `${hour}`;
  document.getElementById("hourdesc").innerText = `${hourText}${hourSuffix}`;
  document.getElementById("minutes").innerText = `${min}`;
  document.getElementById("minutedesc").innerText = `${minText}${minSuffix}`;
  document.getElementById("seconds").innerText = `${sec}`;
  document.getElementById("seconddesc").innerText = `${secText}${secSuffix}`;

  var t = setTimeout(function() { currentTime(); }, 1000);
} // Paste everything together with template literals, give it some time to prepare for launch

function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  } else {
    return k;
  }
} // Add zeros to single numbers for better looks

currentTime(); // Aaaand go
