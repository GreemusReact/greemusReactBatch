// let n = 1;
// while (n <= 10) {
//   var i = 1;
//   table = [];
//   while (i <= 10) {
//     table.push(n + "*" + i + "=" + n * i);
//     i++;
//   }
//   console.log(table);
//   n++;
// }
for (var n = 1; n <= 10; n++) {
  var table = [];
  for (var i = 1; i <= 10; i++) {
    table.push(n + "*" + i + "=" + n * i);
  }
  console.log(table);
}
