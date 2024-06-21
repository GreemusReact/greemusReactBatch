console.log('Sum of Multiplies');

    function sumOfMultiples(number) {
        let sum = 0;
        for (let i = 1; i <= 20; i++) {
           if (i % number === 0) {
              sum += i;
           }
        }
        return sum;
     }     
     console.log(sumOfMultiples(2));