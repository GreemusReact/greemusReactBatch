function findLongestWord(str) {
    let s = str.split(" ");
    let longest = s[0];
    for (let i = 1; i < s.length; i++) {
        if (s[i].length > longest.length) {
            longest = s[i];
        }
    }
    console.log("Given string is :");
    console.log(str);
    console.log("Longest word in string is : " + longest);
}

var a = "My name is Nithish Kumar";
findLongestWord(a);