const studentId = 1601101
let studentName = "Garuav Karade"
var studentGrade = "A"
studentEmail = "karadegaurav@yahoo.com";
StudentDept = 'will this be printed as string?';

//studentId = 1601102; // cannot assign another value to the const variable.
studentName = "Gaurav S. Karade"
studentGrade = "B-";
studentEmail = "gauravkarade.yahoo.com"

// console.log(studentId);
// console.log(studentName);
// console.log(studentGrade);
// console.log(studentEmail);
// console.log(StudentDept);
// console.table([studentId, studentName, studentGrade, StudentDept, studentEmail])
/*
Prefer not to use var because of its issues with block scope and functional scope
using let and const gives us control upon the fact that the value of the variable wont be changing unexpectedly.
let is used at a block scope and the defined value stays the same for that specific block until changed 
and outside that block let will be either undefined or the same value as it was when intialized.
Const is same as const in c or other programming language where the value cannot be changed with the use of assignment operator 
while it will change if the object properties are modified.
*/

let a1 = 20;
const c1 = 1;
 // const needs to be initialized at the time of declaration.
function trial() {  
    try {
    a1 = 10; 
        if (a1==10){
            console.log("a1 is 10")
            //c1 = c1 - a1;
            console.log("NO change in the c1 value took place here" +c1);
        }
        else {
            console.log("a1 doesnt exists.");
            //c1++;
            console.log("now lets see if the increment operatort works in for us or not: " +c1);
        }
    }
    catch (Exceptions){
    console.log("Error: " +Exceptions)
    }
}
console.log(a1);
console.log(c1);
trial();

// const cant be reassigned but its properties can be modified
