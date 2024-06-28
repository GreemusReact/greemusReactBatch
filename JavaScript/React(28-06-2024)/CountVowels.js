function countVowels(str) {
    let count = 0;
    let vowels = "AaEeIiOoUu";
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count += 1;
        }
    }
    console.log("Given string is : " + str);
    console.log("Number of vowels in string are : " + count);
}

countVowels("My name is Nithish Kumar");