function array(number){
    let newarray=[];
    for(i=0;i<number.length;i++){
        let stR=number[i].charAt(0).toUpperCase()+number[i].slice(1);
        newarray.push(stR);
        
    }
    console.log(newarray);
}
let sTr=["sharvani","greemus","tony"];
array(sTr);