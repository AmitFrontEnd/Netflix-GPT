import { useDispatch } from "react-redux";
import { addGptMoviesTitle, clearGptMoviesArray, togglefetchGPTResult } from "../utils/userConfigSlice";
import { GEMINI_API_KEY } from "../utils/constants";

export const useGptSearchMovies = () => {
  const dispatch = useDispatch()
  const searchGptMovies = async (searchValue) => {
    dispatch(clearGptMoviesArray())
    dispatch(togglefetchGPTResult())
    const apiKey = GEMINI_API_KEY;
    const strictPrompt =
      "You are a movie recommendation bot. Give exactly 20 movie names based on the user's query. " +
      "Return ONLY the 20 movie names in a single line, separated by commas. " +
      "Do not add numbering, quotes, explanations, years, or any other text. " +
      "Format must be exactly: movie1,movie2,movie3,movie4,movie5. " +
      "User query: " +
      searchValue;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent?key=${apiKey}`;

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: strictPrompt }] }],
        }),
      });
      const data = await res.json();
      const finalAnswer = data.candidates[0].content.parts[0].text;
      dispatch(addGptMoviesTitle(finalAnswer));
      dispatch(togglefetchGPTResult());
    } catch (error) {
        dispatch(togglefetchGPTResult());
    }
  }
  return searchGptMovies
}
