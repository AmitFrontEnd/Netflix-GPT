const VideoInfo = ({ title, overview }) => {
  return (
    <div
      className="
        absolute
        left-4 right-4
        md:left-16 md:right-auto
        bottom-8 md:bottom-20
        z-40
        w-auto md:w-[45%]
        text-white
      "
    >
      <h1
        className="
          text-2xl
          sm:text-3xl
          md:text-6xl
          font-bold
          mb-2 md:mb-4
          drop-shadow-lg
          line-clamp-2
        "
      >
        {title}
      </h1>

      <p
        className="
          text-xs
          sm:text-sm
          md:text-lg
          text-gray-200
          leading-relaxed
          mb-4 md:mb-6
          line-clamp-2 md:line-clamp-3
        "
      >
        {overview}
      </p>

      <div className="flex items-center gap-2 md:gap-3">
        <button
          className="
            flex items-center gap-2
            bg-white text-black
            px-4 py-2
            md:px-6 md:py-3
            rounded-md
            font-semibold
            text-sm md:text-lg
            hover:bg-gray-300
            transition
          "
        >
          ▶ Play
        </button>

        <button
          className="
            flex items-center gap-2
            bg-gray-500/70 text-white
            px-4 py-2
            md:px-6 md:py-3
            rounded-md
            font-semibold
            text-sm md:text-lg
            hover:bg-gray-500
            transition
          "
        >
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoInfo;
