let array=["Volvo","Lamborgini","BMW","Mahindra"];
function Longest(x){
    long=x[0].length;
    for(let i=1;i<x.length;i++){
        if(x[i].length>long){
            long=x[i];
        }
    }
}
console.log("Given array is:");
console.log(array);
Longest(array);
console.log("Longest string is: "+long);

