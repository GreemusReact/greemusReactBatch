function fabnios(number) {
  let n1 = 0;
  let n2 = 1;
  let nextTerm;
  let arr = [];
  for (i = 0; i < number; i++) {
    arr.push(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
  console.log(arr);
}
fabnios(5);
