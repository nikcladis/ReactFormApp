import StudentForm from "./components/StudentForm";
import StudentInfo from "./components/StudentInfo";
import { StudentFormProvider } from "./components/StudentFormContext";

const App = () => {
  return (
    <StudentFormProvider>
      <div className="flex flex-col items-center justify-center gap-6 h-screen">
        <h1 className="text-6xl font-bold">Student Data Form</h1>
        <div className="p-4 flex gap-16 w-2/5">
          <StudentForm />
          <StudentInfo />
        </div>
      </div>
    </StudentFormProvider>
  );
};

export default App;
