const person = {
    fullName: "akhil",
    age:25,
};
console.log(person["fullName"],person["age"]);

person.age=26;
console.log(person["fullName"],["age"]);

person.address="Eluru";
console.log(person);

delete person.age;
console.log(person);