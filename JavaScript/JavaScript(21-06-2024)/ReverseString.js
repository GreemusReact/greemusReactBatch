function reverseString(str){
    let s="";
    for (let i=str.length-1;i>=0;i--){
        s+=str[i];
    }
    console.log("Given string is: "+str);
    console.log("Reverse of string is: "+s);
}

var x="Java Script"
reverseString(x);