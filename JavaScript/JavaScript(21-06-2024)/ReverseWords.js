function reverseWords(sentence) {
    let s = sentence.split(" ");
    let reverse = "";
    for (let i = s.length-1; i >= 0; i--) {    
        reverse = reverse.concat(" " + s[i]);
    }
    console.log("Given sentence is: ");
    console.log(sentence);
    console.log("Sentence with reversed order of words is:");
    console.log(reverse);
}

var a = "HTML is a front end language";
reverseWords(a);