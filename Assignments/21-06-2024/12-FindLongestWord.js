console.log('Find Longest Word');

function findLongestWord(str){
     let words = str.split(' ');
     let longestWord = 0;
    words.forEach((word) => {
        if(word.length>longestWord){
            longestWord=word;
        }
     });
     return longestWord;
}
console.log(findLongestWord('Akhil Sai Kamma'));