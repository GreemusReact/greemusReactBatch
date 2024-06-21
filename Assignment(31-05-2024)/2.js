let array=["car","bike","train","ship","plane"];
let lengths=[];
let strlen;
function ArrStrings(array){
    for(let i=0;i<array.length;i++){
        strlen= array[i].length;
        lengths.push(strlen);
    }
}
ArrStrings(array);
console.log("Given array of strings is:");
console.log(array);
console.log("Array of lengths of each string are:");
console.log(lengths);