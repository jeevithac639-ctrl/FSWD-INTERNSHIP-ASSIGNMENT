// Student Manager
let students = [];

function addStudent(name, marks) {
    students.push({ name, marks });
}

function calculateAverage(student) {
    let sum = student.marks.reduce((a, b) => a + b, 0);
    return sum / student.marks.length;
}

function displayStudents() {
    students.forEach((student, index) => {
        let average = calculateAverage(student);
        console.log(`Student ${index + 1}: ${student.name}`);
        console.log(`Marks: ${student.marks.join(', ')}`);
        console.log(`Average: ${average.toFixed(2)}`);
        console.log('---');
    });
}

// Example usage
addStudent('John Doe', [85, 90, 78]);
addStudent('Jane Doe', [92, 88, 95]);

displayStudents();