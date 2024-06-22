function capitalizeWords(sentence) {
    let s = sentence.split(" ");
    let final = "";
    for (let i = 0; i < s.length; i++) {
        str = s[i];
        let cap = str[0].toUpperCase();
        let s2 = "";
        for (let j = 1; j <str.length; j++) {
            s2 += str[j];
        }
        str = cap + s2;
        final = final.concat(str + " ");
    }
    console.log("Given sentence is :");
    console.log(sentence);
    console.log("Sentence with first letter of each word is capitalized is:");
    console.log(final);
}

var a = "i am working at greemus";
capitalizeWords(a);
