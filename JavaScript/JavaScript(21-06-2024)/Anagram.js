function isAnagram(str1, str2) {
    console.log(str1 + " and " + str2 + " are anagrams");
    if (str1.length == str2.length) {
        let anag = true; 
        for (let i = 0; i < str1.length; i++) {
            if (!str2.includes(str1[i])) {
                anag = false;
            }
        }
        console.log(anag);
    }
    else {
        console.log(false);
    }
    
}

isAnagram("bare", "bear");