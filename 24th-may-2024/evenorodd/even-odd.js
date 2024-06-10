// function evenOrOdd(number) {
//   if (number % 2 == 0) {
//     console.log(`this is a even number = ${number}`);
//   } else {
//     console.log(`this is a odd number = ${number}`);
//   }
// }
// evenOrOdd(45);
// evenOrOdd(44);
// evenOrOdd(1023);
// evenOrOdd(2024);

function evenOrOdd(numberLimit) {
  for (let i = 1; i <= numberLimit; i++) {
    // if (i % 2 == 0) {
    //   console.log(`this is a even number = ${i}`);
    // } else {
    //   console.log(`this is a odd number = ${i}`);
    // }
    let message = i % 2 == 0 ? `even number${i}` : `odd number:${i}`;
    console.log(message);
  }
}
evenOrOdd(50);
