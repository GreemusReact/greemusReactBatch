console.log('Remove Falsy Values');

function removeFalsyValues(arr){
    let truthyCount= 0;
    for(let value of arr){
        if(value){
            truthyCount++
        }
    }
    return truthyCount;
}
let array = [false, null, 1, " ", undefined,NaN];
console.log(removeFalsyValues(array));