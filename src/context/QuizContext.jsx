import { createContext, useState } from "react";
import { useFetch } from "../hook/useFetch";

export const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  
  const [score, setScore] = useState(0);
  const [category, setCategory] = useState("");

  const { questions,fetchingData } = useFetch();

  return (
    <QuizContext.Provider
      value={{
        category,
        setCategory,
        questions,
        score,
        setScore,
        fetchingData
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;
