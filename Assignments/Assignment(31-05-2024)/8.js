let strings=["Apple","Mango","Orange","Banana"];
let final="";
function Concat(a){
   for(let i=0;i<strings.length;i++){
        final=final+strings[i];
   }
   return final;
}
console.log("Given array is:");
console.log(strings);
Concat(strings);
console.log("Concatenation of all strings is: "+final);

