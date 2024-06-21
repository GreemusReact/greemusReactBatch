console.log('Reverse words');

function reverseWords(sentence){
    let reverseSentence = sentence.split(' ').reverse().join();
    return reverseSentence;
}
console.log(reverseWords('I am a Front End Developer'));