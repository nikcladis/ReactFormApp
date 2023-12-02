import React from "react";
import StudentField from "./StudentField";

const StudentForm = () => {
  return (
    <form>
      <StudentField label="First Name" type="text" />
      <StudentField label="Last Name" type="text" />
      <StudentField label="Email" type="email" />
    </form>
  );
};

export default StudentForm;
