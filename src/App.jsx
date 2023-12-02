import StudentForm from "./components/StudentForm";
import StudentInfo from "./components/StudentInfo";
import { StudentFormProvider } from "./components/StudentFormContext";

const App = () => {
  return (
    <StudentFormProvider>
      <div>
        <h1>Student Data Form</h1>
        <StudentForm />
        <StudentInfo />
      </div>
    </StudentFormProvider>
  );
};

export default App;
