import { Student } from "./Student.js";

export class StudentsList {
    constructor(){
        this.students = []
    }

    addStudent(student){
        this.students.push(student)
    }
}