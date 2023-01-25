import {
  StudentsAction,
  StudentActionTypes,
  StudentsState,
} from "../../types/student";

const defaultState: StudentsState = {
  students: [],
};

export const studentsReducer = (
  state = defaultState,
  action: StudentsAction
): StudentsState => {
  switch (action.type) {
    case StudentActionTypes.ADD_STUDENTS:
      return { ...state, students: action.payload };

    case StudentActionTypes.ADD_STUDENT:
      return { ...state, students: [...state.students, action.payload] };

    case StudentActionTypes.REMOVE_STUDENT:
      const studentsStateWithNoRemoved = state.students.filter(
        (student) => student.id !== action.payload
      );
      return { ...state, students: studentsStateWithNoRemoved };

    case StudentActionTypes.EDIT_STUDENT:
      const studentsStateWithEdited = state.students.map((student) =>
        student.id === action.payload.id ? action.payload : student
      );
      return { ...state, students: studentsStateWithEdited };

    default:
      return state;
  }
};

export const addListStudentsAction = (payload) => ({
  type: StudentActionTypes.ADD_STUDENTS,
  payload,
});
export const addStudentAction = (payload) => ({
  type: StudentActionTypes.ADD_STUDENT,
  payload,
});
export const removeStudentAction = (payload) => ({
  type: StudentActionTypes.REMOVE_STUDENT,
  payload,
});
export const editStudentAction = (payload) => ({
  type: StudentActionTypes.EDIT_STUDENT,
  payload,
});
