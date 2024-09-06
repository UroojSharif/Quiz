import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../context/QuizContext";
import '../css/Categories.css'
function Categories() {
  const navigate = useNavigate();
  const { fetchingData, setCategory } = useContext(QuizContext);

  const handleClick = async (selectedCategory) => {
    setCategory(selectedCategory); // Set the selected category
    await fetchingData(selectedCategory); // Fetch questions based on the category
    navigate(`/quiz/${selectedCategory}`); // Navigate to the quiz page
  };

  return (
    <>
      <div className="container">
        <h2>Welcome to Quiz Battle</h2>
        <h4>Please Select your Favourite Category</h4>
        <div className="category" onClick={() => handleClick("mathematics")}>Mathematics</div>
        <div className="category" onClick={() => handleClick("history")}>History</div>
        <div className="category" onClick={() => handleClick("sports")}>Sports</div>
      </div>
    </>
  );
}

export default Categories;
