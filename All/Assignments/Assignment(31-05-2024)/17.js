let num1=[1,2,3,4,5,6,7,8];
let num2=[0,2,4,6,8,10,12];
function Common(x,y){
    let num3=[];
    for(let i=0;i<x.length;i++){
        if(y.includes(x[i])){
            num3.push(x[i]);
        }
    }
    console.log("Given arrays are:")
    console.log(x);
    console.log(y);
    console.log("Common elements are:");
    console.log(num3);
}
Common(num1,num2);

