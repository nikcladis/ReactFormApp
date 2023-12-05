import { useStudentFormContext } from "./StudentFormContext";

const StudentInfo = () => {
  const { submitState } = useStudentFormContext();

  const isFormValid = submitState.every((field) => field.value);

  return (
    <div className="flex flex-col gap-4">
      {submitState.map((field) => (
        <p className="py-1" key={field.name}>
          {field.label}: {isFormValid && field.value}
        </p>
      ))}
    </div>
  );
};

export default StudentInfo;
