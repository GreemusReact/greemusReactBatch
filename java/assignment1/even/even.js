function even(number){
    for(i=1;i<number.length;i++){
        if(i%2==0){
            console.log("even number",i);
        }
    }
}
let str=[1,2,3,4,5,6,7,8,9];
even(str);