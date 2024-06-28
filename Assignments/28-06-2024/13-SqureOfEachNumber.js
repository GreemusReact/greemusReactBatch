console.log('Square of each number');

function squareNumbers(array){
    let squares = [];
    for(let i=0;i<array.length;i++){
        squares.push(array[i]*array[i])
    }
    console.log(squares);
}
squareNumbers([2,3,4,5,6]);
