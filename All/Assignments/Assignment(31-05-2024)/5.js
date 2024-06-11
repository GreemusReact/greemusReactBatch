let num=[2,5,7,6,3];
let sum=0;
function SumOfNum(x){
    for(let i=0;i<num.length;i++){
        sum=sum+num[i];
    }
}
console.log("Given array is:");
console.log(num);
SumOfNum(num);
console.log("Sum of all numbers of array is: "+sum);

