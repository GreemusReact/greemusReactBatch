function countProperties(Obj) {
    let count = Object.entries(x).length;
    console.log("Given object is:");
    console.log(Obj);
    console.log("Number of properties in object are: " + count);
}

const x = {
    Name : "Mahesh",
    Age : 25,
    Year : 2024,
    Place : "Hyderabad",
    Get : function() {
        return this.Age;
    }
}
countProperties(x);