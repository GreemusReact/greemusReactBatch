function duplicates(number){
     let removeduplicates=[...new Set(number)];
    console.log(removeduplicates);
}
let array=[1,2,3,4,3,5,5,6,7,4,6,6,];
duplicates(array)