function reverse(arry){
   let newarry=[];
   for(i=0;i<arry.length;i++){
    let newstring="";
    for(str=arry[i].length-1;str>=0;str--){
        newstring+=arry[i][str];
    }
    newarry.push(newstring);
   }
   console.log(newarry);
}
let array=["sony","sharvani","swetha"];
reverse(array);