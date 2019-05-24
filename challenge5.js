var a = prompt('Enter word or letter/s');
var b = prompt('Enter word or 2nd letter/s');
var i;
var n;

for (i = 0; i < a.length;i += 1) {
  for (n = 0; n < b.length; n += 1) {
    if (a[i] == b[n]) {
      console.log(b[n]);
    }
    else {
      continue;
    }
  }
}

// function ft_strcmp( str1, str2 ) {
//   if (str1 == str2) {
//     return (0);
//   }
//   else {
//     return (1);
//   }
// }
//
// var i = 0;
// while (i != '\0'){
//   if ((ft_strcmp(arr1[i] === arr2 && arr1 === arr2[i]) == 0)){
//     console.log(i);
//     i += 1;
//   }
// }
