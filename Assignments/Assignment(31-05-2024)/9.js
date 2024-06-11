let array=["car","bike","train","ship","plane"];
let final=[];
let str;
function Caps(a){
    for(let i=0;i<array.length;i++){
        str=array[i];
        let cap=str[0].toUpperCase();
        let s2="";
        for(let j=1;j<str.length;j++){
            s2+=str[j];
        }
        str=cap+s2;
        final.push(str);
    }
    return final;
}
console.log("Given array is:");
console.log(array);
Caps(array);
console.log("Final array with first letter of strings is capital:");
console.log(final);
