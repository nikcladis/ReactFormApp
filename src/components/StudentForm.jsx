import React, { useState } from "react";
import StudentField from "./StudentField";

const initialState = {
  firstName: { value: "", isMissing: false },
  lastName: { value: "", isMissing: false },
  email: { value: "", isMissing: false },
};

const StudentForm = () => {
  const [state, setState] = useState(initialState);

  const handleChange = (field, value) => {
    setState((prevState) => ({
      ...prevState,
      [field]: { value, isMissing: false },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <StudentField
        label="First Name"
        type="text"
        value={state.firstName.value}
        onChange={(e) => handleChange("firstName", e.target.value)}
      />
      <StudentField
        label="Last Name"
        type="text"
        value={state.lastName.value}
        onChange={(e) => handleChange("lastName", e.target.value)}
      />
      <StudentField
        label="Email"
        type="email"
        value={state.email.value}
        onChange={(e) => handleChange("email", e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default StudentForm;
