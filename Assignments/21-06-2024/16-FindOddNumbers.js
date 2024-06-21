console.log('Find Odd Numbers');

function findOddNumbers(array){
let oddNumbers = array.filter(array => array%2);
return oddNumbers;

}

let array = [1,2,3,4,5,6,7,8,9,10];
console.log(findOddNumbers(array));