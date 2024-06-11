function common(x, y) {
    let cArray = [];
    for (i = 0; i <= x.length; i++) {
      if (y.includes(x[i])) {
        cArray.push(x[i]);
      }
    }
    return commonarray = {cArray};
  }
  let arr1 = [1,2,3,4,5,6,7,8,9];
  let arr2 = [6,7,8,3];
  console.log(common(arr1, arr2));