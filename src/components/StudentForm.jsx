import StudentField from "./StudentField";
import { useStudentFormContext } from "../contexts/StudentFormContext";

const StudentForm = () => {
  const { state, handleChange, handleSubmit } = useStudentFormContext();

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      {state.map((field) => (
        <StudentField
          key={field.name}
          label={field.label}
          type={field.type}
          value={field.value}
          onChange={(e) => handleChange(field.name, e.target.value)}
          error={field.error}
        />
      ))}
      <button
        type="submit"
        className="w-1/2 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-700"
      >
        Submit
      </button>
    </form>
  );
};

export default StudentForm;
