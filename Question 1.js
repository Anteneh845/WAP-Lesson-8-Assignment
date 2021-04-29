let student = {
    firstName: "",
    lastName: "",
    grades: [],
    inputNewGrade: function (newGrade) {
        this.grades.push(newGrade);
    },
    computeAverageGrade: function () {
        return this.grades.reduce((acc, num) => num + acc) / this.grades.length
    }
}

let student1 = Object.create(student);
student1.firstName = "A";
student1.lastName = "B";
student1.grades = [8, 99, 87, 97];
student1.inputNewGrade(99);

let student2 = Object.create(student);
student2.firstName = "C";
student2.lastName = "D";
student2.grades = [82, 93, 82, 97];
student2.inputNewGrade(100);

let studentArray = [student1, student2];
console.log(studentArray[0].computeAverageGrade())
console.log(studentArray[1].computeAverageGrade())