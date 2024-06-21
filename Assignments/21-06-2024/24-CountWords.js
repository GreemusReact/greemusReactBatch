console.log('Count Words');

function countWords(sentence){
    let count = sentence.split(' ').length;
    return count;

}
console.log(countWords('This is the first sentence'));