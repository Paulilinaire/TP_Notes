import { Subject } from "./Subject.js";

export class SubjectsList {
    constructor(){
        this.subjects = []
    }

    addSubject(subject){
        this.subjects.push(subject)
    }
}