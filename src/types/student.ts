export enum StudentActionTypes {
  ADD_STUDENT = "ADD_STUDENT",
  ADD_STUDENTS = "ADD_STUDENTS",
  REMOVE_STUDENT = "REMOVE_STUDENT",
  EDIT_STUDENT = "EDIT_STUDENT",
}

export type StudentType = {
  id: number;
  nameSurName: string;
  birthday: string;
  graduating?: "неуд" | "уд" | "хорошо" | "отлично";
};

export interface StudentsState {
  students: StudentType[];
}

export interface AddListStudentsAction {
  type: StudentActionTypes.ADD_STUDENTS;
  payload: StudentType[];
}
export interface AddStudentAction {
  type: StudentActionTypes.ADD_STUDENT;
  payload: StudentType;
}
export interface RemoveStudentAction {
  type: StudentActionTypes.REMOVE_STUDENT;
  payload: number;
}
export interface EditStudentAction {
  type: StudentActionTypes.EDIT_STUDENT;
  payload: StudentType;
}

export type StudentsAction =
  | AddListStudentsAction
  | AddStudentAction
  | RemoveStudentAction
  | EditStudentAction;
