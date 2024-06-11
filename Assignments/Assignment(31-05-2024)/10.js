let nest=[[1,2,3],[4,5,6],[7,8,9,10]];

function nestedArray(x){

    for(let i=0;i<nest.length;i++){
        for(let j=0;j<nest[i].length;j++){
            console.log(nest[i][j]);
        }
    }
}
console.log("Nested array is:");
console.log(nest);
console.log("Elements of nested array are:");
nestedArray(nest);
