function findCommonElements(array1, array2) {
    const commonElements = [];
    const set2 = new Set(array2);

    for (const num of array1) {
        if (set2.has(num)) {
            commonElements.push(num);
        }
    }

    return commonElements;
}
const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 1, 2, 3];
const commonElements = findCommonElements(array1, array2);
console.log("Common elements:", commonElements);
