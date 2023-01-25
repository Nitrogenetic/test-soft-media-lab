import React, { FC, memo, useEffect, useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { StudentsState, StudentType } from "../../types/user";
import HomeStudentsList from "./components/HomeStudentsList";
import {
  addListStudentsAction,
  addStudentAction,
  editStudentAction,
  removeStudentAction,
} from "../../store/reducers/studentsReducer";
import { generateStudentId } from "../../utils/helpers";
import { MOCKED_STUDENTS_FROM_FAKE_BACKEND } from "../../constants/students";

interface HomeProps extends RouteComponentProps {}

const Home: FC<HomeProps> = () => {
  const dispatch = useDispatch();
  const { students } = useSelector<RootState>(
    (state) => state.student
  ) as StudentsState;

  useEffect(() => {
    dispatch(addListStudentsAction(MOCKED_STUDENTS_FROM_FAKE_BACKEND));
    return;
  }, []);

  const addStudent = (student: StudentType) => {
    const newStudentWithId = { ...student, id: generateStudentId(students) };
    dispatch(addStudentAction(newStudentWithId));
  };
  const removeStudent = (studentId: number) => {
    dispatch(removeStudentAction(studentId));
  };
  const changeStudent = (student: StudentType) => {
    dispatch(editStudentAction(student));
  };

  console.log("students: ", students);
  return (
    <div className="absolute-horizontal-center pt-1vw">
      <HomeStudentsList
        students={students}
        addStudent={addStudent}
        removeStudent={removeStudent}
        changeStudent={changeStudent}
      />
    </div>
  );
};

export default memo(Home);
