let num1=[6,7,10,4,2,9];
let num2=[8,1,12,3,5];
num1.sort();
num2.sort();
function SortedArray(x,y){
    let z=x.concat(y);
    z.sort();
    console.log("Given arrays are:");
    console.log(x);
    console.log(y);
    console.log("Sorted array by combining two arrays is:");
    console.log(z);
}
SortedArray(num1,num2);

