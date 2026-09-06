import { useDispatch, useSelector } from "react-redux";
import { clearSelectedMovie } from "../../utils/movieSlice";

const MovieModal = () => {
  const movie = useSelector((store) => store.movies.selectedMovie);
  const dispatch = useDispatch();
  if (!movie) return null;

  const {
    title,
    original_title,
    original_language,
    overview,
    backdrop_path,
    poster_path,
    release_date,
    vote_average,
    vote_count,
    popularity,
    adult,
  } = movie;

  const year = release_date ? new Date(release_date).getFullYear() : "N/A";
  const rating = vote_average ? vote_average.toFixed(1) : "N/A";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
      onClick={() => dispatch(clearSelectedMovie())}
    >
      <div
        className="relative w-full max-w-2xl overflow-hidden rounded-xl bg-neutral-900 border border-white/10 shadow-2xl shadow-black/60 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => dispatch(clearSelectedMovie())}
          className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white/80 hover:bg-black/80 hover:text-white transition-all duration-200 border border-white/10"
        >
          ✕
        </button>

        <div className="relative h-56 md:h-72 w-full">
          <img
            src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
        </div>

        <div className="relative -mt-20 px-6 pb-7 flex gap-5">
          <img
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            alt={title}
            className="w-28 md:w-36 rounded-lg shadow-lg shadow-black/50 border border-white/10 flex-shrink-0"
          />

          <div className="flex-1 pt-16 md:pt-20">
            <div className="flex items-center gap-2 flex-wrap mb-1.5">
              <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                {title}
              </h2>
              {adult && (
                <span className="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-red-600 text-white">
                  18+
                </span>
              )}
            </div>

            {original_title !== title && (
              <p className="text-xs text-gray-500 mb-3">
                Original title: {original_title}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-gray-300 mb-4">
              <span className="flex items-center gap-1">
                <span className="text-red-500">★</span>
                {rating}
                <span className="text-gray-500 text-xs">
                  ({vote_count?.toLocaleString()})
                </span>
              </span>
              <span className="text-gray-600">•</span>
              <span>{year}</span>
              <span className="text-gray-600">•</span>
              <span className="uppercase text-xs tracking-wide bg-white/10 px-2 py-0.5 rounded">
                {original_language}
              </span>
            </div>
          </div>
        </div>

        <div className="px-6 pb-8">
          <h3 className="text-xs font-semibold tracking-wider text-gray-500 uppercase mb-2">
            Overview
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed mb-6">
            {overview}
          </p>

          <div className="grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
            <div>
              <p className="text-[11px] text-gray-500 uppercase tracking-wide mb-1">
                Popularity
              </p>
              <p className="text-sm font-semibold text-white">
                {popularity?.toFixed(1)}
              </p>
            </div>
            <div>
              <p className="text-[11px] text-gray-500 uppercase tracking-wide mb-1">
                Language
              </p>
              <p className="text-sm font-semibold text-white uppercase">
                {original_language}
              </p>
            </div>
            <div>
              <p className="text-[11px] text-gray-500 uppercase tracking-wide mb-1">
                Release
              </p>
              <p className="text-sm font-semibold text-white">{release_date}</p>
            </div>
          </div>

          <button className="mt-7 w-full py-3 rounded-md bg-red-600 hover:bg-red-700 active:bg-red-800 text-white text-sm font-semibold transition-all duration-200 shadow-lg shadow-red-600/20">
            ▶ Play
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
