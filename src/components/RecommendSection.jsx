import MovieList from "./MovieList";
import useMovieListDetails from "../hooks/useMovieListDetails";

const RecommendSection = () => {
  const movieSectionDetails = useMovieListDetails();
  return (
    <div className="bg-black relative ">
      {movieSectionDetails.map((section) => (
        <MovieList
          key={section.title}
          error={section.error}
          title={section.title}
          movies={section.movies}
        />
      ))}
    </div>
  );
};

export default RecommendSection;
