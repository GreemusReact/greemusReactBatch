console.log('Factorial of a number');

function factorial(num){
    this.num=num;
    let mul=1;
    for(let i=1;i<=num;i++){
        mul*=i;
    }
    console.log(mul);
}
factorial(5);