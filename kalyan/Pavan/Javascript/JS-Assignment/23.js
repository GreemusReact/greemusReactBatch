function findIndexofString(arr, target) {
     const index = arr.indexOf(target);
     return index !== -1 ? index : -1;
  }
   const stringsArray = ["pavan", "kalyan", "javascript", "reactjs"];
  const targetString = "kalyan";
  console.log(findIndexofString(stringsArray, targetString)); 
  