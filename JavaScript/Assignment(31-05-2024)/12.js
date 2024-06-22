let num=[2,4,6,5,2,5,4,2,1];
let unique=[];
        function RemoveDuplicates(num) {
            num.forEach(element => {
            if (!unique.includes(element)) {
                unique.push(element);
                }
            });
        }
    console.log("Array of numbers is:");
    console.log(num);
    RemoveDuplicates(num);
    console.log("After removing duplicates:");
    console.log(unique);