function arrayIntersection(arr1, arr2) {
    let a=[];
    for(let i=0;i<arr1.length;i++){
        if(arr2.includes(arr1[i])){
            a.push(arr1[i]);
        }
    }
    console.log("Given arrays are:");
    console.log(arr1);
    console.log(arr2);
    console.log("Common elements of both arrays are:");
    console.log(a);
}

let x = ["A", "B", "H", "J", "M", "K", "O"];
let y = ["D", "G", "A", "O", "C", "H", "B"];
arrayIntersection(x, y);