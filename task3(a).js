// Why do we need literal objects? And how does it differs than normal classes? 


// 1)  object literal 
// Example:-
var student = {
    name: "Ravi"
 }
 var newStudent = student;
 document.write("student name = " + student.name);
 document.write("</br>");
 document.write("new student name = " + newStudent.name);
 document.write("</br>");
 newStudent.name = "kumar";
 document.write("</br>");
 document.write("student name = " + student.name);
 document.write("</br>");
 document.write("new student name = " + newStudent.name);
// Explaination :- when we change in one instatnce , will change in all instances 


//  2)  constructor function
// Example:-

var Student = function() {
    this.name= "Ravi"
 }
 var newStudent = new Student();
 var student = new Student();
 document.write("student name = " + student.name);
 document.write("<br>");
 document.write("new student name = " + newStudent.name);
 document.write("<br>");
 newStudent.name = "kumar";
 document.write("student name = " + student.name);
 document.write("<br>");
 document.write("new student name = " + newStudent.name);
 // Explaination :- when we change in one instatnce , will no change in all instances





 // What’s an Interface? What’s the difference between interface and abstract class? Is it allowed in JavaScript?
// 1- classes can  inherit one abstract class but can inherit more than interfaces.
