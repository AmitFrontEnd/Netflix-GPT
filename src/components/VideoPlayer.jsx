import { useSelector } from "react-redux";

const VideoPlayer = () => {
  const trailerMovie = useSelector((state) => state.movies?.trailerInfo);

  if (!trailerMovie) return;

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-black">
      <div
        className="
          absolute
          top-1/2 left-1/2
          w-[177.78vh] h-[56.25vw]
          min-w-full min-h-full
          -translate-x-1/2 -translate-y-1/2
          scale-[1.4]"
      >
        <iframe
          className="w-full h-full pointer-events-none"
          src={`https://www.youtube-nocookie.com/embed/${trailerMovie.key}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&fs=0&loop=1&playlist=${trailerMovie.key}&playsinline=1`}
          title="trailer"
          allow="autoplay; encrypted-media"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>

      <div className="absolute bg-black opacity-50 inset-0 z-10" />
    </div>
  );
};

export default VideoPlayer;
