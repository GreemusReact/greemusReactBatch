let num=[1,2,3,4,5,6,7,8,9,10,11,12];
let evens=[];
function Even(x){
    for(let i=0;i<x.length;i++){
        if(x[i]%2==0){
            evens.push(x[i]);
        }
    }
}
console.log("Given array is:");
console.log(num);
Even(num);
console.log("Array of even numbers is:");
console.log(evens);