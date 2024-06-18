const student = {
    flName:"sai"
};

Object.defineProperty(student, "getName",{
    get:function (){
        return this.flName;
    }
});

Object.defineProperty(student, "changeName",{
    set:function(data){
        this.flName=data;
    }
});

console.log(student.flName);
student.changeName="akhil";
console.log(student.flName);