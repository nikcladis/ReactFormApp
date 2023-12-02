import { createContext, useContext, useState, useReducer } from "react";
import { studentFormReducer, initialState } from "./studentFormReducer";

const StudentFormContext = createContext();

export const useStudentFormContext = () => {
  return useContext(StudentFormContext);
};

export const StudentFormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(studentFormReducer, initialState);
  const [validState, setValidState] = useState([]);

  const handleChange = (fieldName, value) => {
    dispatch({ type: "CHANGE", fieldName, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SUBMIT" });

    const isFormValid = state.every((field) => field.value !== "");
    isFormValid ? setValidState([...state]) : setValidState([]);
  };

  const contextValue = {
    state,
    handleChange,
    handleSubmit,
    validState,
  };

  return (
    <StudentFormContext.Provider value={contextValue}>
      {children}
    </StudentFormContext.Provider>
  );
};
