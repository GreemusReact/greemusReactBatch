function array(number,char){
    let newarray=[];
    for(i=0;i<number.length;i++){
        if(number[i].includes(char)){
            newarray.push(number[i]);
        }
    }
    console.log(newarray);
}
let sTr=["sharvani","greemus","sony"];
let Ast="v";
array(sTr,Ast);