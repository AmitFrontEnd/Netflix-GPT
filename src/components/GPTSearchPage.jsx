import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

import MovieList from "./MovieList";
import { useGetMoviesResults } from "../hooks/useGetMoviesResults";
const GPTSearchPage = () => {
  useGetMoviesResults();
  const finalMoviesArray = useSelector(
    (store) => store.userConfig.finalMoviesArray,
  );

  return finalMoviesArray ? (
    <>
      <GPTSearch />
      <div className="bg-black relative -mt-60 ">
        <MovieList title={"Your Searched Results"} movies={finalMoviesArray} />
      </div>
    </>
  ) : (
    <GPTSearch />
  );
};

export default GPTSearchPage;
