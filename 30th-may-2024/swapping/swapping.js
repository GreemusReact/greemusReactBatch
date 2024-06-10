function swapping(x, y) {
  let temp;
  temp = x;
  x = y;
  y = temp;
  console.log("swap x", x);
  console.log("swap y", y);
}
swapping(6, 7);
