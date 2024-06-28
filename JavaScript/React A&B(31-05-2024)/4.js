let strings=["Apple","Mango","Orange","Banana"];
let reverse=[];
function ReverseString(x){
    for(let i=0;i<x.length;i++){
        let s=x[i];
        let s2="";
        for(let j=s.length-1;j>=0;j--){
            s2=s2+s[j];
        }
        reverse.push(s2);
    }
    console.log(reverse);
}
console.log("Given array is:");
console.log(strings);
console.log("Array of reversed strings is:");
ReverseString(strings);
