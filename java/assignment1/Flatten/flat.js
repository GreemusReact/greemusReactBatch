function flatArray(arr) {
    let res = arr.flat(3);
    console.log(res);
  
  }
  let array = [1, 2, [3, 4, [5, 6, 7, [8, 9]]]];
  flatArray(array);
