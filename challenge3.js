var a = parseInt(prompt("enter number"));
var	b = parseInt(prompt("enter number"));
var	c = parseInt(prompt("enter number"));

if(a > b && a > c) {
  console.log(a+": is greatest");
}
else if(b > a && a > c) {
	console.log(b+": is greatest");
}
else if(c > a && c > b) {
  console.log(c+": is greatest");
}
