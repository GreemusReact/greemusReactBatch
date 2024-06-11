let num=[1,2,3,4,5,6];
let squares=[];
let sum=0;
function SumOfSqures(x){
    for(let i=0;i<num.length;i++){
        let s=num[i]*num[i];
        sum=sum+s
    }
    console.log("Sum of squares of numbers is: "+sum);
}
console.log("Array is:");
console.log(num);
SumOfSqures(num);
