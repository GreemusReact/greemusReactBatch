console.log('Array Filter');

function filterEvenNumbers(array){
    let evenNumbers = [];
    for(let i=0;i<array.length;i++){
        if(array[i]%2==0){
            evenNumbers.push(array[i]);
        }
    }
    console.log(evenNumbers)
}
filterEvenNumbers([1,2,3,4,5,6,7,8,9,10]);