function findMissingNumber(arr) {
    let largest = arr[0];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > largest){
            largest = arr[i];
        }
    }
    let a = [];
    for (let i = 0; i <= largest; i++) {
        a.push(i);
    }
    let missing = 0;
    a.forEach(element => {
        if (!arr.includes(element)){
            missing = element;
        }
    });
    console.log("Given array is:");
    console.log(arr);
    console.log("Mising element is: " + missing);
}

var x = [3, 6, 1, 2, 5, 0, 4, 10, 7, 9];
findMissingNumber(x);