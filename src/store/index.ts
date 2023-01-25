import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { studentsReducer } from "./reducers/studentsReducer";

const rootReducer = combineReducers({
  student: studentsReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());

export type RootState = ReturnType<typeof rootReducer>;
