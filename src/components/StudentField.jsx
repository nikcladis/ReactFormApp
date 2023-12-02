import React, { useState } from "react";

const StudentField = ({ label, type, value, onChange }) => {
  return (
    <div>
      <label>{label}: </label>
      <input type={type} value={value} onChange={onChange} />
    </div>
  );
};

export default StudentField;
