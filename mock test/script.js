function findEvenOdd(num){
    for(i=0;i<=num;i++){
        if(i%2==0){
            return 'even';
        }
        else{
            return 'odd'
        }
    }
}
let check=findEvenOdd(20);
console.log(check);