import { useSelector } from "react-redux";
import { useTrailer } from "../hooks/useTrailer";

const VideoPlayer = ({ movieId }) => {
  useTrailer(movieId);

  const trailerMovie = useSelector((state) => state.movies?.trailerInfo);

  if (!trailerMovie) return null;

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <iframe
        className="
          absolute
          top-1/2 left-1/2
          w-full h-full
          -translate-x-1/2 -translate-y-1/2
          scale-[1.8] md:scale-[1.35]
          pointer-events-none
        "
        src={`https://www.youtube.com/embed/${trailerMovie.key}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&loop=1&playlist=${trailerMovie.key}`}
        title="Movie trailer"
        allow="autoplay; encrypted-media"
        referrerPolicy="strict-origin-when-cross-origin"
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
};

export default VideoPlayer;
