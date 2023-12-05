import StudentForm from "./components/StudentForm";
import StudentInfo from "./components/StudentInfo";
import StudentFormProvider from "./contexts/StudentFormProvider";

const App = () => {
  return (
    <StudentFormProvider>
      <div className="flex flex-col items-center justify-center gap-12 min-h-screen p-4 md:p-8 lg:p-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
          Student Data Form
        </h1>
        <div className="text-lg flex flex-col md:flex-row gap-12">
          <StudentForm />
          <StudentInfo />
        </div>
      </div>
    </StudentFormProvider>
  );
};

export default App;
