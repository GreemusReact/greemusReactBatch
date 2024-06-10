function sumOfSquareOfNumbers(arr) {
    
    const sum = arr.reduce((acc, num) => {
      return acc + Math.pow(num, 2); 
    }, 0);
  
    return sum;
  }
  const numbersArray = [1, 2, 3, 4, 5];
  console.log(sumOfSquareOfNumbers(numbersArray)); 
  