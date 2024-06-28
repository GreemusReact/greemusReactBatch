console.log('Prime number check');

function isPrime(num){
    for(let i=2;i<num;i++){
        if(num%i===0){
            console.log('False');
        }
    }  
    console.log('True');
}
isPrime(55);