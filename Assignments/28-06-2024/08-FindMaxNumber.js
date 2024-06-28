console.log('Find the maximum Number');

function findMax(array){
    let max = array[0];
    for(let i=0;i<array.length;i++){
        if(array[i]>max){
            max = array[i];
        }
    }
    console.log('The maximum number is : '+ max);
}
findMax([2,3,6,4,7,9,1,5]);