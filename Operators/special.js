//Type of operator

let num = 20;
console.log(typeof num);
console.log(typeof "Javascript");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);

//comma(,) operator

let c = (2,3) + (3,5); //it is equal to c = 3+5 = 8
//the comma (,) operator takes only left side values
console.log(c);

//new operator

let emp = new Object();
emp.name = "Akhil";
emp.no = 1234;
emp.sal = 40000;

console.log(emp.name + " " + emp.no + " " + emp.sal);

//delete operator

delete emp.name;
console.log(emp.name + " " + emp.no + " " + emp.sal);