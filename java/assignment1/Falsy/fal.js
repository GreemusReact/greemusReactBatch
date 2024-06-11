function removeFalse(arr) {
    let truthyValues = [];
    for (let ele of arr) {
      if (!!ele) {
        truthyValues.push(ele);
      }
    }
    return truthyValues;
  }
  
  let array = [false, 0, "", null, undefined, NaN, 1, true];
  console.log(removeFalse(array));