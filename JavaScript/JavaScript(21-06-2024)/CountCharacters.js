function countCharacters(str) {
    console.log("Given string is: " + str);
    console.log("Object with characters and their count as keys and values is:");
    for (let i = 0; i < str.length; i++){
        let count = 0;
        for (let j = 0; j < str.length; j++){
            if (str[i] == str[j]) {
                count += 1;
            }
        }
        console.log(str[i] + ":" + count);
    }
}

countCharacters("GREEMUS");