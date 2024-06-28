console.log('Sum of two numbers');

function sum(arg1,arg2){
    this.arg1=arg1;
    this.arg2=arg2;
    console.log(arg1+arg2);
}
sum(1,2);