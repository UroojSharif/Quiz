import React, { useContext } from "react";
import '../css/Home.css'
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("quiz");
  };
  return (
    <div>
      <h1>Quiz Battle</h1>
      <button onClick={handleClick}>Start Quiz Battle</button>
    </div>
  );
}

export default Home;
