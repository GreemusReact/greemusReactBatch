console.log('Find Largest Numbers');

let array = [1,2,3,4,5];

function largestNumber(number){
    let large = array[0];
    for(let i=0;i<array.length;i++){
        if(array[i]>large){
            large=array[i];
        }
    }
    console.log(large);
}
let number = (largestNumber(array));