function arguments(...items) {
  return items.reduce((n1, n2) => n1 + n2);
}
let arr = [1, 2, 3, 4, 5];
console.log(arguments(...arr));
