import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { useTopRatedMovies } from "../hooks/useTopRatedMovies";
import { usePopularMovies } from "../hooks/usePopularMovies";

const RecommendSection = () => {
  useTopRatedMovies();
  usePopularMovies();
  const nowPlayingMovies = useSelector(
    (state) => state.movies.nowPlayingMovies,
  );
  const popularMovies = useSelector((state) => state.movies.popularMovies);
  const topRatedMovies = useSelector((state) => state.movies.topRatedMovies);
  return (
    <div className="bg-black relative ">
      <MovieList title="Now Playing Movies" movies={nowPlayingMovies} />
      <MovieList title="Top Rated Movies" movies={topRatedMovies} />
      <MovieList title="Popular Movies" movies={popularMovies} />
    </div>
  );
};

export default RecommendSection;
