console.log('Factorial Calculation');

function factorial(n){
    let mul = 1;
    for(let i=2;i<=n;i++){
        mul*=i;
    }
    return mul;
}
console.log(factorial(5));