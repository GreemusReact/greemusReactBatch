function countWords(sentence) {
    let s = sentence.split(" ");
    let count = s.length;
    console.log("Given sentence is:");
    console.log(sentence);
    console.log("Number of words in the sentence are: " + count);
}

var x = "AngularJS is a framework and ReactJS is a library of JavaScript";
countWords(x);