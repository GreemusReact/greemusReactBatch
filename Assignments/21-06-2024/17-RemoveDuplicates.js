console.log('Remove Duplicates');

function removeDuplicates(array){
    let newArray = [...new Set(array)];
    return newArray;
}
let  array = [1,2,3,1,4,3,5,2,2,6];
console.log(removeDuplicates(array));