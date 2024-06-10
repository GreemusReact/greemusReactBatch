// var emp = ["a", "b", "c"];
// for (i = 0; i < emp.length; i++) {
//   console.log(emp[i]);
// }

// var employee = new Array("a", "b", "c", "d");
// for (i = 0; i < employee.length; i++) {
//   console.log(employee[i]);
// }

// var x = [1, 2, 3, 4, 5, 6];
// x.forEach((xdetails) => {
//   console.log(xdetails);
// });

// x.forEach(function (x) {
//   console.log(x);
// });

var arr = [
  1,
  "venky",
  false,
  { name: "laxman" },
  ["laxman", "venky", 10, false],
];
for (i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

function even(num) {
  for (let i = 0; i <= num.length; i++) {
    if (num[i] % 2 == 0) {
      console.log("this is even number:", num[i]);
    } else {
      console.log("this is odd number:", num[i]);
    }
  }
}
let array = [2, 3, 4, 5, 6, 7, 8, 10, 11];
even(array);

function prime(num) {
  for (i = 2; i <= num; i++) {
    let isPrime = true;
    for (j = 2; j < i; j++) {
      if (i % j == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(i);
    }
  }
}
prime(100);

function swapping(x, y) {
  let temp;
  temp = x;
  x = y;
  y = temp;
  console.log(x);
  console.log(y);
}
swapping(6, 7);

function maxNumber(x, y, z) {
  if (x > y && x > z) {
    console.log("this is maximun number", x);
  } else if (y > x && y > z) {
    console.log("y is the maximum number", y);
  } else {
    console.log("z is the maxminum", z);
  }
}
maxNumber(3, 9, 6);
