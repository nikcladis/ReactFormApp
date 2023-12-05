import { useReducer, useState } from "react";
import StudentFormContext from "../contexts/StudentFormContext";
import initialFormState from "../reducers/initialFormState";
import studentFormReducer from "../reducers/studentFormReducer";
import { CHANGE, SUBMIT } from "../reducers/actionTypes";

const StudentFormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(studentFormReducer, initialFormState);
  const [submitState, setSubmitState] = useState(initialFormState);

  const handleChange = (fieldName, value) => {
    dispatch({ type: CHANGE, fieldName, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: SUBMIT });
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

export default StudentFormProvider;
