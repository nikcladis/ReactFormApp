import React from "react";

const StudentField = ({ label, type }) => {
  return (
    <div>
      <label>{label}: </label>
      <input type={type} />
    </div>
  );
};

export default StudentField;
