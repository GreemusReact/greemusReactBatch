const student = {
    fName: "akhil",
    age:20,

    get getName(){
       return this.fName;
    }
};

console.log(student.fName);
console.log(student.getName);
