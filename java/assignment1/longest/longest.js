function string(number){
    let longest="";
    for(i=0;i<number.length;i++){
        if(number[i].length>longest.length){
            longest=number[i];
        }
    }
    console.log(longest);
}
let srt=["sony","sharvani","raju"];
string(srt);