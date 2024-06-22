function removeFalsyValues(arr) {
    let final = [];
    let falsy = [false, 0, "", null, undefined, NaN];
    for (let i = 0; i < arr.length; i++) {
        if (!falsy.includes(arr[i])) {
            final.push(arr[i]);
        }
    }
    console.log("Given array is:");
    console.log(arr);
    console.log("After removing falsy values is:");
    console.log(final);
}

var a = [10, "ABC", false, "", undefined, NaN, null, true, 500];
removeFalsyValues(a);