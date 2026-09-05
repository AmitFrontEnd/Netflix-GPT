import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";
import GPTRateError from "../components/GPTRateError"
import MovieList from "./MovieList";
import { useGetMoviesResults } from "../hooks/useGetMoviesResults";
import GPTSearchLoading from "./GPTSearchLoading";
const GPTSearchPage = () => {
  useGetMoviesResults();
  const finalMoviesArray = useSelector(
    (store) => store.userConfig.finalMoviesArray,
  );
  const gptMoviesTitles = useSelector(
    (store) => store.userConfig.gptMoviesTitles,
  );
  const isFecthingGPTResult = useSelector(
    (store) => store.userConfig.isFecthingGPTResult,
  );
  const gptError = useSelector(
    (store) => store.userConfig.gptError,
  );

  if(gptError) return <GPTRateError/>

  return (
    <>
      <GPTSearch />
      {isFecthingGPTResult || (gptMoviesTitles && !finalMoviesArray) ? (
        <div className="-mt-40">
          <GPTSearchLoading />
        </div>
      ) : (
        finalMoviesArray && (
          <div className="bg-black relative -mt-60 ">
            <MovieList
              title={"Your Searched Results"}
              movies={finalMoviesArray}
            />
          </div>
        )
      )}
    </>
  );
};

export default GPTSearchPage;
