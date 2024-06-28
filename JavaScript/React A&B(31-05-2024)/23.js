let array=["item1","item2","item3","item4","item5"];
let s="item3";
function Search(x,y){
    if(x.includes(y)){
        console.log("Index of \""+y+"\" is: "+x.indexOf(y));
    }
    else{
        console.log("-1");
    }
}
console.log("Array is:");
console.log(array);
Search(array,s);

