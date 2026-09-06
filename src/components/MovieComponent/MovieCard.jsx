import { useDispatch } from "react-redux";
import { IMG_CDN } from "../../utils/constants";
import { addSelectedMovie } from "../../utils/movieSlice";
const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();

  const { poster_path, title, vote_average } = movie;
  if (!poster_path) return;
  return (
    <div
      className="group w-32 sm:w-36 md:w-44 lg:w-48 shrink-0 cursor-pointer"
      onClick={() => dispatch(addSelectedMovie(movie))}
    >
      {/* Poster */}
      <div
        className="
          relative
          aspect-[2/3]
          overflow-hidden
          rounded-lg
          bg-gray-900
          shadow-lg
          transition-all
          duration-300
          ease-out
          group-hover:-translate-y-1
          group-hover:shadow-2xl
        "
      >
        <img
          src={`${IMG_CDN}${poster_path}`}
          alt={title}
          loading="lazy"
          className="
            w-full
            h-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-110
          "
        />

        {/* Dark overlay */}
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/80
            via-transparent
            to-transparent
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-300
          "
        />

        {/* Rating */}
        <div
          className="
            absolute
            bottom-2
            left-2
            bg-black/70
            backdrop-blur-md
            text-white
            text-[11px]
            sm:text-xs
            font-semibold
            px-2
            py-1
            rounded-md
          "
        >
          ⭐ {vote_average?.toFixed(1)}
        </div>

        {/* Play button */}
        <div
          className="
            absolute
            inset-0
            flex
            items-center
            justify-center
            opacity-0
            group-hover:opacity-100
            transition-opacity
            duration-300
          "
        >
          <div
            className="
            w-10
            h-10
            sm:w-12
            sm:h-12
            rounded-full
            bg-white/90
            text-black
            flex
            items-center
            justify-center
            shadow-xl
          "
          >
            ▶
          </div>
        </div>
      </div>

      {/* Title */}
      <h3
        className="
          mt-2
          text-white
          text-xs
          sm:text-sm
          font-medium
          truncate
        "
      >
        {title}
      </h3>
    </div>
  );
};

export default MovieCard;
