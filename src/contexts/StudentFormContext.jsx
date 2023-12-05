import { createContext, useContext } from "react";

const StudentFormContext = createContext();

export const useStudentFormContext = () => {
  return useContext(StudentFormContext);
};

export default StudentFormContext;
