function person() {
    this.name = "Akhil",
    this.age = 20;
    this.msg=function(){
        console.log("Hai");
    }
}

const person1 = new person();
const person2 = new person();

console.log(person1.name);
console.log(person2.name);