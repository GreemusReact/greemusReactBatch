function person (name,age,gender){
    this.name = name;
    this.age=age;
    this.gender=gender;
}

const person1 = new person("akhil",20,"male");
const person2 = new person("sai",20,"male");

console.log(person1.name)
console.log(person2.name);