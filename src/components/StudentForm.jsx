import React, { useState } from "react";
import StudentField from "./StudentField";

const initialState = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    value: "",
    isMissing: false,
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    value: "",
    isMissing: false,
  },
  { name: "email", label: "Email", type: "email", value: "", isMissing: false },
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
    setState((prevState) =>
      prevState.map((field) => ({
        ...field,
        isMissing: field.value === "",
      }))
    );
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
