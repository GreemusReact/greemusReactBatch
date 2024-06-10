function findUniqueCharacters(str) {

    const uniqueChars = new Set();
    for (let char of str) {
         uniqueChars.add(char);
    }
    return Array.from(uniqueChars);
  }
  
  const string = "hello world";
  const uniqueCharsArray = findUniqueCharacters(string);
  console.log(uniqueCharsArray); 
  