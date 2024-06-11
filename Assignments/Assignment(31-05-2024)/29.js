let string="HTMLCSSJAVASCRIPT";
function Unique(x){
    let s2=[];
    for(let i=0;i<x.length;i++){
        if(!s2.includes(x[i])){
            s2.push(x[i]);
        }
    }
    console.log("String is: "+x);
    console.log("Array of unique characters is:");
    console.log(s2);
}
Unique(string);
