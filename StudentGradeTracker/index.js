

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
    
    studentDisplay() {
    const main = document.querySelector(".main-container");
    main.innerHTML = "";

    this.allStudents.forEach(student => {
        let studentContainer = document.createElement("div");
        studentContainer.classList.add("student-container");
        main.appendChild(studentContainer);

        let studentName = document.createElement("h4");
        studentName.textContent = student.name;
        studentContainer.appendChild(studentName);

        for (let sub in student.subject) {
            let subjectContainer = document.createElement("div");
            subjectContainer.classList.add("subject");

            
            let subjectTitle = document.createElement("p");
            subjectTitle.textContent = `${sub}: ${student.subject[sub].join(", ")}`;
            subjectContainer.appendChild(subjectTitle);

            
            const removeSub = document.createElement("button");
            removeSub.classList.add("remove");
            removeSub.textContent = "Remove Subject";

           
            removeSub.addEventListener("click", () => {
                delete student.subject[sub]; 
                this.studentDisplay();       
            });

            subjectContainer.appendChild(removeSub);
            studentContainer.appendChild(subjectContainer);
        }
    });
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

    studentDisplay(){
        this.studentList.studentDisplay()
    }

}

const app = new App();
const studentId = app.addStudents("Alice");

app.addSubjects(studentId, "Math", 95);
app.addSubjects(studentId, "Math", 88);
app.addSubjects(studentId, "English", 90);

app.studentDisplay();

