function sumOfSquares(numbers) {
    return numbers.reduce((sum, num) => sum + num ** 2, 0);
}
const numbers = [1, 2, 3, 4, 5];
const result = sumOfSquares(numbers);
console.log("Sum of squares:", result);
