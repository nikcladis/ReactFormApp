import React, { useReducer } from "react";
import StudentField from "./StudentField";
import { studentFormReducer, initialState } from "./studentFormReducer";

const StudentForm = () => {
  const [state, dispatch] = useReducer(studentFormReducer, initialState);

  const handleChange = (fieldName, value) => {
    dispatch({ type: "CHANGE", fieldName, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SUBMIT" });
  };

  return (
    <form onSubmit={handleSubmit}>
      {state.map((field) => (
        <StudentField
          key={field.name}
          label={field.label}
          type={field.type}
          value={field.value}
          onChange={(e) => handleChange(field.name, e.target.value)}
          isMissing={field.isMissing}
        />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentForm;
