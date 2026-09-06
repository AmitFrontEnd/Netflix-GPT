import { useSelector } from "react-redux";
import MainContainer from "../components/MainContainer";
import RecommendSection from "../components/MovieComponent/RecommendSection";
import GPTSearchPage from "../components/GPTComponets/GPTSearchPage";
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

  const isSearch = useSelector((store) => store.gpt.isSearch);
  const trailerMovie = useSelector((store) => store.movies.trailerInfo);

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
