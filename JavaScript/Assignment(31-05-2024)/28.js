let array=["Item1",201,"",undefined,null,"item2",false,0,500,NaN];
function RemoveFalsy(x){
    let z=[];
    let falsy=[false,0,"",null,undefined,NaN];
    for(let i=0;i<x.length;i++){
            if(!falsy.includes(x[i])){
                z.push(x[i]);
            }
        }
        console.log("Given array is:");
        console.log(x);
        console.log("After removing falsy values:");
        console.log(z);
    }
RemoveFalsy(array);

