function reverseString(str) {
    let reverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverse += str[i];
    }
    console.log("Given string is : " + str);
    console.log("Reverse of string is : " + reverse);
}

reverseString("Greemus Software");