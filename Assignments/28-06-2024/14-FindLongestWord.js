console.log('Find the longest word');

function findLongestWord(sentence){
    console.log('The sentence is : ', sentence);
    let arr = sentence.split(" ");
    let longest = '';
    for(var word of arr){
        if(word.length>longest.length){
           longest= word;
        }
        
    }
    console.log('The longest word is : ',longest);

}
findLongestWord('Hello this is the JavaScript');