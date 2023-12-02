import StudentField from "./StudentField";
import { useStudentFormContext } from "./StudentFormContext";

const StudentForm = () => {
  const { state, handleChange, handleSubmit } = useStudentFormContext();

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
