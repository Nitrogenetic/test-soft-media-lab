import { FC, useState } from "react";
import { StudentType } from "../../../types/student";
import HomeStudentChangingFields from "./HomeStudentChangingFields";

interface HomeStudentsListProps {
  students: StudentType[];

  addStudent(value: Omit<StudentType, "id">): void;
  removeStudent(value: number): void;
  changeStudent(value: StudentType): void;
}

const HomeStudentsList: FC<HomeStudentsListProps> = (props) => {
  const { students, addStudent, removeStudent, changeStudent } = props;
  const initialStudent: Omit<StudentType, "id"> = {
    nameSurName: "",
    birthday: "",
    graduating: "уд",
  };
  const [newStudent, setNewStudent] = useState(initialStudent);
  const [changingStudent, setChangingStudent] = useState(null);

  const changeStudentState = (field, value, setter) =>
    setter((prev) => ({
      ...prev,
      [field]: value,
    }));

  return (
    <div className="flex flex-col">
      {students.map((student) => {
        const isRedacting = changingStudent?.id === student.id;
        const changedStudent = isRedacting
          ? { ...student, ...changingStudent }
          : student;
        return (
          <div
            key={student.id}
            className="flex space-x-0.4vw text-16 border-2 border-gray-100 text-center children:h-3vw"
          >
            <div className="w-7vw bg-blue-200 border-r-2 border-gray-100 truncate">
              {student.id}
            </div>
            <HomeStudentChangingFields
              student={changedStudent}
              onChange={(field, value, id) => {
                setChangingStudent(null);
                changeStudentState(field, value, setChangingStudent);
                changeStudentState("id", id, setChangingStudent);
              }}
            />
            <button
              className="w-10vw bg-red-400 truncate"
              onClick={() => removeStudent(student.id)}
            >
              Удалить
            </button>
            <button
              className="w-10vw bg-blue-400 truncate"
              onClick={() => changeStudent(changedStudent)}
            >
              Сохранить
            </button>
          </div>
        );
      })}
      <div className="flex space-x-0.4vw text-16 border-2 border-gray-100 children:h-3vw">
        <div className="w-7vw border-r-2 border-gray-100" />
        <HomeStudentChangingFields
          student={newStudent as StudentType}
          onChange={(field, value) =>
            changeStudentState(field, value, setNewStudent)
          }
        />
        <button
          className="w-20.4vw bg-green-400 truncate"
          onClick={() => {
            addStudent(newStudent);
            setNewStudent(initialStudent);
          }}
        >
          Добавить
        </button>
      </div>
    </div>
  );
};

export default HomeStudentsList;
