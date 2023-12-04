import { createContext, useContext, useState, useReducer } from "react";
import { studentFormReducer, initialState } from "./studentFormReducer";

const StudentFormContext = createContext();

export const useStudentFormContext = () => {
  return useContext(StudentFormContext);
};

export const StudentFormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(studentFormReducer, initialState);
  const [submitState, setSubmitState] = useState(initialState);

  const handleChange = (fieldName, value) => {
    dispatch({ type: "CHANGE", fieldName, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SUBMIT" });
    setSubmitState(state);
  };

  const contextValue = {
    state,
    handleChange,
    handleSubmit,
    submitState,
  };

  return (
    <StudentFormContext.Provider value={contextValue}>
      {children}
    </StudentFormContext.Provider>
  );
};
