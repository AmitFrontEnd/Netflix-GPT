import { useSelector } from "react-redux";
import MainContainer from "../components/MainContainer";
import RecommendSection from "../components/RecommendSection";
import GPTSearchPage from "../components/GPTSearchPage";
import BrowsePageLoading from "../components/BrowsePageLoading";
import { useTrailer } from "../hooks/useTrailer";
import { usePopularMovies } from "../hooks/usePopularMovies";
import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import { useTopRatedMovies } from "../hooks/useTopRatedMovies";

const Browse = () => {
  useNowPlayingMovies();
  const trailerId = useSelector(
    (store) => store.movies.nowPlayingMovies?.[0]?.id,
  );
  useTrailer(trailerId);
  usePopularMovies();
  useTopRatedMovies();

  const isSearch = useSelector((state) => state.gpt.isSearch);
  const trailerMovie = useSelector((state) => state.movies.trailerInfo);

  if (!trailerMovie) return <BrowsePageLoading />;
  return !isSearch ? (
    <>
      <MainContainer />
      <RecommendSection />
    </>
  ) : (
    <GPTSearchPage />
  );
};

export default Browse;
