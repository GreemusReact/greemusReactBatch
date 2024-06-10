function firstLetterCapital(strArr) {
  let capitalArr = [];
  for (i = 0; i < strArr.length; i++) {
    let capital = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1);
    capitalArr.push(capital);
  }
  return capitalArr;
}
let array = ["venky", "cherry", "ram"];
console.log(firstLetterCapital(array));
