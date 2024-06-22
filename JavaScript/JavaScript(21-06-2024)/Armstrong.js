function isArmstrongNumber(num) {
    let str = num.toString();
    let n = str.length;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += str[i]**n;
    }
    console.log(num + " is an armstrong number");
    if (num == sum) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}

isArmstrongNumber(153);
isArmstrongNumber(150);
