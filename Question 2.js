function Student(firstName, lastName, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = grades;
}

Student.prototype.computeAverageGrade = function () {
    return this.grades.reduce((acc, num) => num + acc) / this.grades.length
}

Student.prototype.inputNewGrade = function (newGrade) {
    this.grades.push(newGrade);
};

let student1 = new Student("A", "B", [100, 99, 98, 97]);
student1.inputNewGrade(99);

let student2 = new Student("C", "D", [100, 89, 95, 97]);
student2.inputNewGrade(100);

let studentArray = [student1, student2];
console.log(studentArray[0].computeAverageGrade())
console.log(studentArray[1].computeAverageGrade())