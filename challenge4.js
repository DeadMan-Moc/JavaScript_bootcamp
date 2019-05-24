var num = parseInt(prompt("Input the number you would like to change to time"));

function timeConvert(n) {
  var num = n;
  var hours = (num / 60);
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);

  return num + " minutes = " + rhours + " hour(s) : " + rminutes + " minute(s).";
}
console.log(timeConvert(num));
