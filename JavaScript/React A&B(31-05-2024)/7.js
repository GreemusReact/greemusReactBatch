let array=["car1","car2","car3","car4"];
let a='c';
function Items(x,y){
    for(let i=0;i<array.length;i++){
        array[i]+=a;
    }
}
console.log("Given array is:");
console.log(array);
console.log("Given character is: "+a);
Items(array,a);
console.log("Array of strings contains the character is:");
console.log(array);
