import { useStudentFormContext } from "./StudentFormContext";

const StudentInfo = () => {
  const { validState } = useStudentFormContext();

  if (!validState) {
    return (
      <div>
        <p>First Name: </p>
        <p>Last Name: </p>
        <p>Email: </p>
      </div>
    );
  }

  return (
    <div>
      <h2>Student Information</h2>
      {validState.map((field) => (
        <p key={field.name}>
          {field.label}: {field.value}
        </p>
      ))}
    </div>
  );
};

export default StudentInfo;
