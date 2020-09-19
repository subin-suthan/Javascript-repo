[12:56 pm, 19/09/2020] +91 99378 40817: et x=10;
x=200;// prints 200
console.log(x);

{
     let x = 20; // block scope
}
console.log(x);
const y =90;
// y=100;
console.log(y);

//  for(let i=0;i<5;i++)
//      setTimeout(
//          ()=>console.log(i),1000);

// var greet = function(){
//     for (var a = 0; a < 1; a++) {
//         console.log("Hi");
//     }
//     console.log(a);
// }
// greet();

const HOBBIES = ["sports","music","dance"];
// HOBBIES = "Reading";
HOBBIES.push("Reading");
console.log(HOBBIES)
HOBBIES.pop();
console.log(HOBBIES)
//  HOBBIES=[];

const student={name:'Ram',age:20}
student.age=21;
console.log(student);
// student={}

var message=10;
console.log(message);
message="hello";
console.log(message);

var msg = "This needs a var declaration";
console.log(msg);

function greet(){
    msg = "This is a demo";
}
greet();