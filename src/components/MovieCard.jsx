import { useSelector } from "react-redux";

const MovieCard = ({  }) => {
  const movie=useSelector(state=>state.movies.nowPlayingMovies)
  if(!movie) return
  const { poster_path, title, vote_average } = movie;

  return (
    <div className="group w-36 sm:w-40 md:w-44 lg:w-48 shrink-0 cursor-pointer">
      {/* Poster */}
      <div className="relative overflow-hidden rounded-md">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          className="
            w-full
            aspect-[2/3]
            object-cover
            rounded-md
            transition-transform
            duration-300
            group-hover:scale-105
          "
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Rating */}
        <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
          ⭐ {vote_average?.toFixed(1)}
        </div>
      </div>

      {/* Movie Info */}
      <div className="mt-2">
        <h3 className="text-white text-sm font-semibold truncate">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default MovieCard;
