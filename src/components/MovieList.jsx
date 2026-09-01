import MovieCard from "./MovieCard";
const MovieList = ({ title, movies }) => {
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-14 py-6 md:py-8">
      {/* Heading */}
      <div className="flex items-center justify-between mb-4 md:mb-6">
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
          {title}
        </h2>

        <button className="hidden sm:block text-sm text-gray-400 hover:text-white transition cursor-pointer">
          See All →
        </button>
      </div>

      {/* Movie Row */}
      <div
        className="
          flex
          gap-3
          sm:gap-4
          md:gap-5
          overflow-x-auto
          overflow-y-hidden
          scroll-smooth
          pb-3
          scrollbar-hide
          snap-x
          snap-mandatory
        "
      >
        {movies?.map((movie) => (
          <div key={movie.id} className="snap-start">
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MovieList;
