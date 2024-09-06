import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import Quiz from "./views/Quiz";
import Result from "./views/Result";
import QuizProvider from "./context/QuizContext";
import SelectedCategory from "./components/SelectedCategory";

function App() {
  return (
    <>
      <QuizProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/quiz/:category" element={<SelectedCategory />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </Router>
      </QuizProvider>
    </>
  );
}

export default App;
