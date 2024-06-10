const ecommerce = {
  prjoectId: 234,
  projectName: "ecommerce",
  technogies: {
    frontEnd: ["css", "html", "javscript", "react", "angular"],
    backend: ["java", "nodejs"],
    dataBase: ["sql", "mySql"],
    server: ["aws", "devops"],
  },
  get: function () {
    console.log("this is my project");
  },
};
console.log(ecommerce.projectName);
console.log(ecommerce.technogies.frontEnd);
console.log(ecommerce.get());

function sum(num1, num2) {
  console.log(num1 + num2);
  return;
}
let res = sum(23, 27);
console.log(res);
