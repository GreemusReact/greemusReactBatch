const ecommerce ={
  projectid:5488,
  projectName:"greemus",
  technogies:{
    frontend:["html","css"],
    backend:["javascript","react"],
  },
  get:function(){
    console.log("My project");
  },

}
console.log(ecommerce.projectName);
console.log(ecommerce.technogies.frontend);
console.log(ecommerce.get());