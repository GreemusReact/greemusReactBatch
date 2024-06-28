console.log('Reverse a String');

function reverseString(string){
    console.log('The original string is : '+ string)
    console.log('The reversed string is : '+ string.split('').reverse().join(''));

}
reverseString('Hello World!');