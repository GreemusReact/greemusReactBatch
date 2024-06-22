function caesarCipher(str, shift) {
    let s = "";
    let alp = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < str.length; i++) {
        let x = alp.indexOf(str[i]);
        s += alp[x + shift]; 
    }
    console.log("Given string is: " + str);
    console.log("After shifting each character " + shift + " positions in alphabet is :" + s);
}

caesarCipher("nithish", 3);