function concatStr(strArr) {
  let concantString = "";
  for (i = 0; i < strArr.length; i++) {
    concantString = concantString.concat(strArr[i]);
  }
  return concantString;
}
let str = ["java", "script", " ", "is a", " ", "scripting", " ", "language"];
console.log(concatStr(str));

