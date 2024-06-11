let array=["Volvo","Lamborgini","BMW","Mahindra"];
function UpperCase(x){
    let caps=[];
    for(let i=0;i<x.length;i++){
        let s=x[i].toUpperCase();
        caps.push(s);
    }
    console.log("Strings with uppercase are:");
    console.log(caps);
}
console.log("Array is:");
console.log(array);
UpperCase(array);
