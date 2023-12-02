import { createContext, useContext, useReducer } from "react";
import { studentFormReducer, initialState } from "./studentFormReducer";

const StudentFormContext = createContext();

export const useStudentFormContext = () => {
  return useContext(StudentFormContext);
};

export const StudentFormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(studentFormReducer, initialState);

  const handleChange = (fieldName, value) => {
    dispatch({ type: "CHANGE", fieldName, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SUBMIT" });
  };

  const contextValue = {
    state,
    handleChange,
    handleSubmit,
  };

  return (
    <StudentFormContext.Provider value={contextValue}>
      {children}
    </StudentFormContext.Provider>
  );
};
