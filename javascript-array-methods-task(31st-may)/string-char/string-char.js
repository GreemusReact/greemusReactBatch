function stringCharacter(str, char) {
  let charArr = [];
  for (i = 0; i < str.length; i++) {
    if (str[i].includes(char)) {
      charArr.push(str[i]);
    }
  }
  return charArr;
}
let array = ["venky", "ram", "chiru", "cherry", "naidu"];
let char = "y";
console.log(stringCharacter(array, char));
