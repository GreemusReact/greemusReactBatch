console.log('Count Vowels');

function countVowels(string){
    let Vowels = ['a','e','i','o','u','A','E','I','O','U'];
    let count = 0;
    for(letter of string){
        if(Vowels.includes(letter)){
            count++
        }
    }
    console.log(count);
}
countVowels('Hello World!');