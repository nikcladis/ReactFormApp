const StudentField = ({ label, type, value, onChange, isMissing }) => {
  return (
    <div>
      <label>{label}: </label>
      <input type={type} value={value} onChange={onChange} />
      {isMissing && <p>This Field is Required</p>}
    </div>
  );
};

export default StudentField;
