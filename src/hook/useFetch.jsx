import { useEffect, useState } from "react";

export function useFetch() {
  const [questions, setQuestions] = useState([]);

  const fetchingData = async (category) => {
    let url;
    try {
      switch (category) {
        case "mathematics":
          url =
            "https://opentdb.com/api.php?amount=10&category=19&type=multiple";
          break;
        case "history":
          url =
            "https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple";
          break;
        case "sports":
          url =
            "https://opentdb.com/api.php?amount=10&category=21&type=multiple";
          break;
        default:
          throw new Error('Error: Invalid url'); // Assign a default URL value
      }

      console.log(url); // Check the URL for debugging

      const response = await fetch(url);
      const result = await response.json();

      console.log(result); // Debug fetched results

      setQuestions(result.results); // Set the questions from the API response
    } catch (error) {
      console.log(error);
    }
  };
  /*  useEffect(() => {
    fetchingData();
  }, []); 
  */

  return { questions, fetchingData };
}
