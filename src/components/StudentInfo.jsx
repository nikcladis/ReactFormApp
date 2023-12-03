import { useStudentFormContext } from "./StudentFormContext";

const StudentInfo = () => {
  const { validState } = useStudentFormContext();

  if (!validState) {
    return (
      <div className="flex flex-col gap-4">
        <p className="py-1">First Name: </p>
        <p className="py-1">Last Name: </p>
        <p className="py-1">Email: </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {validState.map((field) => (
        <p className="py-1" key={field.name}>
          {field.label}: {field.value}
        </p>
      ))}
    </div>
  );
};

export default StudentInfo;
