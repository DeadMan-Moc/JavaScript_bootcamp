var a = parseInt(prompt('Enter number'));
var b = parseInt(prompt('Enter number2'));
var sum;
sum = a + b;
var num = sum.toString();
var x = num.includes("3");

// function toString(str) {
//   if (str = sum.toString()) {
//     return (true);
//   }
//   return (false)
// }

if ((a == 3 || b == 3) && (num == x)) {
  alert('true');
}else {
  alert("false there's no 3 there");
}
// else if (num >= 3){
//
// }
