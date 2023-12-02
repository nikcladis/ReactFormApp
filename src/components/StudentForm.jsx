import React, { useState } from "react";
import StudentField from "./StudentField";

const initialState = [
  { name: "firstName", type: "text", value: "", isMissing: false },
  { name: "lastName", type: "text", value: "", isMissing: false },
  { name: "email", type: "email", value: "", isMissing: false },
];

const StudentForm = () => {
  const [state, setState] = useState(initialState);

  const handleChange = (fieldName, value) => {
    setState((prevState) =>
      prevState.map((field) =>
        field.name === fieldName ? { ...field, value, isMissing: false } : field
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      {state.map((field) => (
        <StudentField
          key={field.name}
          label={field.name}
          type={field.type}
          value={field.value}
          onChange={(e) => handleChange(field.name, e.target.value)}
        />
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentForm;
