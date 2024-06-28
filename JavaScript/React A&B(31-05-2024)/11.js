let array=["car","bus","bike","car","car","bus"];
function Object(x){
    console.log("Given array is:");
    console.log(x);
    console.log("Keys and values of object are:");
    for(let i=0;i<x.length;i++){
        let count=0;
        let s=x[i];
        for(let j=0;j<x.length;j++){
            if(s==x[j]){
                count=count+1;
            }
        }
        console.log(s+":"+count);
    }
}
Object(array);
