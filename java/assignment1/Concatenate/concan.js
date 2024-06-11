function array(number){
    let newstring="";
    for(i=0;i<number.length;i++){
        newstring=newstring.concat(number[i]);
    }
    console.log(newstring);

}
let Ast=["sharvani","reddy","palla"];
array(Ast)