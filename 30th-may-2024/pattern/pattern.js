function pattern(number) {
  let pattern = "";
  for (i = 0; i <= number; i++) {
    for (j = 0; j < i; j++) {
      pattern += "5";
    }
    pattern += "\n";
  }
  console.log(pattern);
}
pattern(5);
