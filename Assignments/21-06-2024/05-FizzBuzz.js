console.log('Fizz Buzz');

function fizzBuzz(arg){
    if(typeof arg != 'number')
        {
            return 'NaN-Not a Number'+arg;
        }
    if((arg%3==0)&&(arg%5==0)){
            return 'Fizz Buzz';
        }
    if(arg%3==0){
        return 'Fizz';
    }
    if(arg%5==0){
        return 'Buzz';
    }    
    else{
        return 'Enter a odd number '+arg;
    }
}
console.log(fizzBuzz('a'));
console.log(fizzBuzz(9));
console.log(fizzBuzz(10));
console.log(fizzBuzz(30));
console.log(fizzBuzz(7));