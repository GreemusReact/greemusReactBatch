function gcd(x, y) {
  let gcd;
  for (i = 0; i <= x && i <= y; i++) {
    if (x % i == 0 && y % i == 0) {
      gcd = i;
    }
  }
  console.log(`grestest number ${gcd}`);
}
gcd(94, 96);
gcd(63, 70);
