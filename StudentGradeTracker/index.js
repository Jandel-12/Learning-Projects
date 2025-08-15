class Student{
    constructor(name){
        this.id = crypto.randomUUID();
        this.name = name;
        this.subject = {};
    }



}

class GradeBook{
    constructor(){
        this.allStudents = []
    }    
    
    //add Students objects
    addStudents(student){
        this.allStudents.push(student);
    }

    getStudentById(studentId){
        return this.allStudents.find(student => student.id === studentId);
    }

}

class App{
    constructor(){
        this.studentList = new GradeBook()
    }
    //add subject
    addStudents(name){
        const newStudent = new Student(name);
        this.studentList.addStudents(newStudent);
        return newStudent.id;
    }

    addSubjects(id, sub, grades)
    {
        const student = this.studentList.getStudentById(id);

        if(!student){
            console.log("Student Is not found");
            return;
        }

        if(!student.subject[sub]){
            student.subject[sub] = [];
        }

        student.subject[sub].push(grades);
    }

}

const app = new App();
const studentId = app.addStudents("Alice");

app.addSubjects(studentId, "Math", 95);
app.addSubjects(studentId, "Math", 88);
app.addSubjects(studentId, "English", 90);

console.log(app.studentList.allStudents);

