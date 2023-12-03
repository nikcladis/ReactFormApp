import StudentForm from "./components/StudentForm";
import StudentInfo from "./components/StudentInfo";
import { StudentFormProvider } from "./components/StudentFormContext";

const App = () => {
  return (
    <StudentFormProvider>
      <div>
        <h1 className="bg-blue-500 text-white p-4">Student Data Form</h1>
        <div>
          <StudentForm />
          <StudentInfo />
        </div>
      </div>
    </StudentFormProvider>
  );
};

export default App;
