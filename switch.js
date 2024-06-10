/*var name = prompt("Enter Your name");
var marks = prompt("Enter your marks");
var college= prompt("enter collegd name")

switch(name){
    case "ramya":
        document.write(" topper of the batch")
        break;
        case "lokesh":
            document.write(" topper of the university")
            break;
            case "laxman":
                document.write(" average student")
                break;

                default:
                document.write("enter valid details")
    
}
document.write(name)*/


function test1(){
    document.write("easily pass the test"+ "<br>")
}

test1();
test1();
test1();
test1();
test1();
test1();

let x= 5+"9"
let y=10-"5"

document.write(x,y)


let a=["mohan","venky","moses","chari","teja","ramesh"]

let b=a.slice(0,5)

document.write(b);


let k=[12,23,44,55,66,99]

let l=k.splice(3,1)

document.write(k);
document.write("<br>");


let cars=['raju ','lokesh','ramya','doctor']
cars.forEach(function(home) {
    
    document.write(home+"<br>")
    
});

let family=['raju','rama']
let child=['lokesh','ramya','lucky']

let meet=family.concat(child);
document.write(meet)

