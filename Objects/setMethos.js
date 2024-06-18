const student= {
    fName : "akhil",

    set setName (newName){
        this.fName=newName;
    }
};

console.log(student.fName);

student.setName="sai";
console.log(student.fName);