function titleCase(str) {
    let s = str.split(" ");
    let final = "";
    for (let i = 0; i < s.length; i++) {
        x = s[i];
        let cap = x[0].toUpperCase();
        let s2 = "";
        for (let j = 1; j <x.length; j++) {
            s2 += x[j];
        }
        x = cap + s2;
        final = final.concat(x + " ");
    }
    console.log("Given sentence is :");
    console.log(str);
    console.log("Sentence with first letter of each word is capitalized is:");
    console.log(final);
}
var a = "i am working at greemus";
titleCase(a);