import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { useTopRatedMovies } from "../hooks/useTopRatedMovies";
import { usePopularMovies } from "../hooks/usePopularMovies";
import { lang } from "../utils/languages";

const RecommendSection = () => {
  const preferedLang = useSelector(
    (store) => store.userConfig.preferedLanguage,
  );
  useTopRatedMovies();
  usePopularMovies();
  const nowPlayingMovies = useSelector(
    (state) => state.movies.nowPlayingMovies,
  );
  const popularMovies = useSelector((state) => state.movies.popularMovies);
  const topRatedMovies = useSelector((state) => state.movies.topRatedMovies);
  return (
    <div className="bg-black relative ">
      <MovieList
        title={lang[preferedLang].nowPlaying}
        movies={nowPlayingMovies}
      />
      <MovieList title={lang[preferedLang].topRated} movies={topRatedMovies} />
      <MovieList title={lang[preferedLang].popular} movies={popularMovies} />
    </div>
  );
};

export default RecommendSection;
