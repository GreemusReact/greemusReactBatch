console.log('Object property count');


let student = {
    Name : 'Sai',
    id : '1234',
    Place : 'ap'
};

student.age = 21;

function countProperties(result){
    let count = Object.keys(result).length
    console.log('The count is : '+count);
}
let result = student;
countProperties(result);