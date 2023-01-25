import { FC } from "react";
import { STUDENTS_GRADUATING } from "../../../constants/students";
import { StudentType } from "../../../types/student";

interface HomeStudentChangingFieldsProps {
  student: StudentType;
  onChange(field: string, value: string, id?: number): void;
}

const HomeStudentChangingFields: FC<HomeStudentChangingFieldsProps> = (
  props
) => {
  const { student, onChange } = props;

  return (
    <>
      <input
        value={student.nameSurName}
        onChange={(input) =>
          onChange("nameSurName", input.target.value, student?.id)
        }
        className="w-25vw border-r-2 border-gray-100"
      />
      <input
        value={student.birthday}
        onChange={(input) =>
          onChange("birthday", input.target.value, student?.id)
        }
        className="w-25vw border-r-2 border-gray-100"
      />
      <select
        className="w-10vw px-1vw border-r-2 border-gray-100"
        value={student.graduating}
        onChange={(select) => {
          return onChange("graduating", select.target.value, student?.id);
        }}
      >
        {STUDENTS_GRADUATING.map((graduating) => (
          <option key={graduating} value={graduating}>
            {graduating}
          </option>
        ))}
      </select>
    </>
  );
};

export default HomeStudentChangingFields;
