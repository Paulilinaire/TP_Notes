import { Student } from "./js/Student.js"
import { StudentsList } from "./js/StudentsList.js"
import { Subject } from "./js/Subject.js"
import { SubjectsList } from "./js/SubjectsList.js"

let studentsList = new StudentsList ()
let subjectsList = new SubjectsList ()
let subject = document.getElementById("subject")
let grade = document.getElementById("grade")
let studentsClass = document.getElementById("studentsClass")
let subjectsClass = document.getElementById("subjectsClass")


//Function addStudent
document.getElementById('addStudentButton').addEventListener('click', addStudent)
    function addStudent(){
        //adding studentName in the table studentsList
        let studentName = document.getElementById("studentName").value
        let studentFirstName = document.getElementById("studentFirstName").value
        let student = new Student (studentName, studentFirstName)        
        studentsList.addStudent(student)
        // create a function that get this.students, browse the table and this function will update the select in the DOM
        console.log(studentsList);
        //adding student in DOM (select)
        let option = document.createElement("option")
        option.textContent = `${studentName} ${studentFirstName}`
        studentsClass.appendChild(option)
        console.log(studentsClass);
    }

//Function addSubject
document.getElementById('addSubjectButton').addEventListener('click', addSubject)
    function addSubject(){
        //adding subjectName in the table subjectsList
        let subjectName = document.getElementById("subjectName").value
        let subject = new Subject (subjectName)
        subjectsList.addSubject(subject)      
        // create a function that get this.subjects, browse the table and this function will update the select in the DOM
        console.log(subjectsList);
        //adding subject in DOM (select)
        let option = document.createElement("option")
        option.textContent = `${subjectName}`
        subjectsClass.appendChild(option)
        console.log(subjectsClass);
    }