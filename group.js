const students = [
  { name: "Alice", grade: 85 },
  { name: "Bob", grade: 92 },
  { name: "Charlie", grade: 67 },
];
  
function groupStudentsByGrade(students) {
  const group = { A: [], B: [], F: [] };

  students.forEach((student) => {
    if (student.grade >= 90) {
      group.A.push(student);
    } else if (student.grade >= 80) {
      group.B.push(student);
    } else {
      group.F.push(student);
    }
  });

  return group;
}

const groupedStudents = groupStudentsByGrade(students);
console.log(groupedStudents);  

module.exports = groupStudentsByGrade;