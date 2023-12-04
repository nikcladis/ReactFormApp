const StudentField = ({ label, type, value, onChange, error }) => {
  return (
    <div className="flex gap-4 justify-between">
      <label className="px-2 py-1">{label}: </label>
      <div className="flex flex-col items-end">
        <input
          type={type}
          value={value}
          onChange={onChange}
          className={`border-2 focus:outline-none ${
            error ? "border-red-500" : "border-black"
          } px-2 py-1 rounded-md`}
        />
        <p className={`text-red-500 items-center ${error ? "" : "invisible"}`}>
          This Field is Required
        </p>
      </div>
    </div>
  );
};

export default StudentField;
