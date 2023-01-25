import { FC, useState } from "react";
import { STUDENTS_GRADUATING } from "../../../constants/students";
import { StudentType } from "../../../types/user";

interface HomeStudentsListProps {
  students: StudentType[];

  addStudent(value: StudentType): void;
  removeStudent(value: number): void;
  changeStudent(value: StudentType): void;
}

const HomeStudentsList: FC<HomeStudentsListProps> = (props) => {
  const { students, addStudent, removeStudent, changeStudent } = props;
  const initialUser: Omit<StudentType, "id"> = {
    nameSurName: "",
    birthday: "",
  };
  const [currentUser, setCurrentUser] = useState(initialUser);

  return (
    <div className="flex flex-col">
      {students.map((student) => {
        return (
          <div
            key={student.id}
            className="flex space-x-0.4vw text-16 border-2 border-gray-100 text-center"
          >
            <div className="w-7vw bg-blue-200 border-r-2 border-gray-100 truncate">
              {student.id}
            </div>
            <div className="w-25vw bg-green-300 border-r-2 border-gray-100 truncate">
              {student.nameSurName}
            </div>
            <div className="w-25vw border-r-2 border-gray-100 truncate">
              {student.birthday}
            </div>
            <div className="w-10vw bg-orange-200 border-r-2 border-gray-100 truncate">
              {student?.graduating}
            </div>
            <button className="w-10vw bg-red-400 truncate">Удалить</button>
            <button className="w-10vw bg-blue-400 truncate">
              Редактировать
            </button>
          </div>
        );
      })}
      <div className="flex space-x-0.4vw text-16 border-2 border-gray-100 h-40">
        <div className="h-full w-7vw" />
        <input
          value={currentUser.nameSurName}
          //   onChange={}
          className="h-full w-25vw"
        />
        <input type="text" className="h-full w-25vw" />
        <select className="h-full w-10vw px-1vw">
          {STUDENTS_GRADUATING.map((graduating) => (
            <option key={graduating} value={graduating}>
              {graduating}
            </option>
          ))}
        </select>
        <button className="h-full w-20.4vw bg-green-400 truncate">
          Сохранить
        </button>
      </div>
    </div>
  );
};

export default HomeStudentsList;
