function 1a() {
  var a = document.getElementById('value1').nodeValue;
  var b = document.getElementById('value2').nodeValue;
  if (a || b == 65 ) {
    console.log('true');
  }
   else if (a + b == 65) {
  console.log('true');
  }
  else{
    console.log("false");
  }
}

function 1b(sum){
  var a = document.getElementById('value1').nodeValue;
  var b = document.getElementById('value2').nodeValue;

  sum = a + b;


}
