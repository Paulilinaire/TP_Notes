import { Student } from "./js/Student.js"
import { StudentsList } from "./js/StudentsList.js"

let studentsList = new StudentsList ()
let subject = document.getElementById("subject")
let grade = document.getElementById("grade")
let studentsClass = document.getElementById("studentsClass")


//Function addStudent
document.getElementById('addStudentButton').addEventListener('click', addStudent)
    function addStudent(){
        //adding studentName in the table studentsList
        let studentName = document.getElementById("studentName").value
        let studentFirstName = document.getElementById("studentFirstName").value
        let student = new Student (studentName, studentFirstName)        
        studentsList.addStudent(student)
        // create a function that get this.student, browse the table and this function will update the select in the DOM
        console.log(studentsList);
        //adding student in DOM (select)
        let option = document.createElement("option")
        option.textContent = `${studentName} ${studentFirstName}`
        studentsClass.appendChild(option)
        console.log(studentsClass);
    }
