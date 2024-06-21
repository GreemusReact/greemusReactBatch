console.log('Capitalize Letters');

function capitalizeLetters(str){
    str = str.toLowerCase().split(' ');
    for(let i=0;i<str.length;i++){
        str[i] = str[i].charAt(0).toUpperCase()+str[i].slice(1);
    }
    return str.join(' ');
  }
  console.log(titleCase('i am learning and practicing front end and back end'));