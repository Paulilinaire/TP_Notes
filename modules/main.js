import { Student } from "./js/Student.js"
import { StudentsList } from "./js/StudentsList.js"
import { Subject } from "./js/Subject.js"
import { SubjectsList } from "./js/SubjectsList.js"
import { Grade } from "./js/Grade.js"

let studentsList = new StudentsList ()
let subjectsList = new SubjectsList ()
let gradeTable = []
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
        // create a function that get this.students[], which browse the table and this function will update the select in the DOM
        console.log(studentsList);
        //adding student in DOM select
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
        // create a function that get this.subjects[], which browse the table and this function will update the select in the DOM
        console.log(subjectsList);
        //adding subject in DOM (select)
        let option = document.createElement("option")
        option.textContent = `${subjectName}`
        subjectsClass.appendChild(option)
        console.log(subjectsClass);
    }

//Function addGradeButton
document.getElementById('addGradeButton').addEventListener('click', addGrade)
    function addGrade(){
        let studentName2 = document.getElementById("studentName2").value
        let studentFirstName2 = document.getElementById("studentFirstName2").value
        let subject = document.getElementById("subject").value
        let grade = document.getElementById("grade").value
        let newGrade = new Grade (studentName2, studentFirstName2, subject, grade)
        gradeTable.push(newGrade)
        console.log(gradeTable);
        // Display in the DOM table
        for(let gradeNumber of gradeTable){
            table.innerHTML += 
            `<tr>
                <td>${studentName2}</td>
                <td>${studentFirstName2}</td>
                <td>${subject}</td>
                <td>${grade}</td>
            </tr>
            `
        }
        gradeTable = []
}
