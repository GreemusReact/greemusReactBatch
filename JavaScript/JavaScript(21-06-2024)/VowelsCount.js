function countVowels(str) {
    let vowels = "AaEeIiOoUu";
    let count = 0;
   for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count += 1;
        }
   }
    console.log("Number of vowels in " + str + " are: " + count);
}

countVowels("International");
countVowels("Umbrella");