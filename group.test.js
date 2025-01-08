const groupStudentsByGrade = require('./group');

describe('groupStudentsByGrade', () => {
  it('จัดกลุ่มตามเกณฑ์คะแนนได้ถูกต้อง', () => {
    const students = [
      { name: "Alice", grade: 85 },
      { name: "Charlie", grade: 67 },
      { name: "Bob", grade: 92 },
    ];

    const expectedOutput = {
      A: [{ name: "Bob", grade: 92 }],
      B: [{ name: "Alice", grade: 85 }],
      F: [{ name: "Charlie", grade: 67 }],
    };

    const result = groupStudentsByGrade(students);
    expect(result).toEqual(expectedOutput);
  });
});
