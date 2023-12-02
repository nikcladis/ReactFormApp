import React, { useState } from "react";
import StudentField from "./StudentField";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
};

const StudentForm = () => {
  const [state, setState] = useState(initialState);

  const handleChange = (field, value) => {
    setState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  return (
    <form>
      <StudentField
        label="First Name"
        type="text"
        value={state.firstName}
        onChange={(e) => handleChange("firstName", e.target.value)}
      />
      <StudentField
        label="Last Name"
        type="text"
        value={state.lastName}
        onChange={(e) => handleChange("lastName", e.target.value)}
      />
      <StudentField
        label="Email"
        type="email"
        value={state.email}
        onChange={(e) => handleChange("email", e.target.value)}
      />
    </form>
  );
};

export default StudentForm;
