var a = parseInt(prompt('Enter first side length'));
var b = parseInt(prompt('Enter second side length'));
var c = parseInt(prompt('Enter third side length'));

if (a != 0 && b != 0 && c != 0) {
  let side_length = (a + b + c) / 2;
  let x = (side_length - a) * (side_length - b) * (side_length - c);
  let area = Math.sqrt(side_length * x);
  alert(area);
}
else {
  alert("Error with the sides of your triangle, one of them is 0");
}
