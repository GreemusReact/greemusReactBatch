function sumArray(arr){
    let sum=0;
    for (let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    console.log("Given array is:")
    console.log(arr);
    console.log("Sum of array elements is: "+sum);
}

var x=[3,5,7,9,11,15];
sumArray(x);


