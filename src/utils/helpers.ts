import { StudentType } from "../types/user";

export const generateStudentId = (students: StudentType[]) => {
  if (!students?.length) {
    return 0;
  }
  const studentsId = students.map((student) => student.id);
  const maximumId = Math.max.apply(null, studentsId);
  return maximumId + 1;
};
