import { useStudentFormContext } from "./StudentFormContext";

const StudentInfo = () => {
  const { state } = useStudentFormContext();

  return (
    <div>
      <p>
        First Name: {state.find((field) => field.name === "firstName").value}
      </p>
      <p>Last Name: {state.find((field) => field.name === "lastName").value}</p>
      <p>Email: {state.find((field) => field.name === "email").value}</p>
    </div>
  );
};

export default StudentInfo;
