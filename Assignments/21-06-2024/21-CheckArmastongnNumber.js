console.log('Check Armstrong number');

function isArmstrongNumber(number) {
    let sum = 0;
    let temp = number;

    while (temp > 0) {
        const remainder = temp % 10;
        sum += remainder ** 3;
        temp = parseInt(temp / 10);
    }

    if (sum === number) {
        return true;
    }
    else{
        return false;
    }
}

console.log(isArmstrongNumber(153)); 
