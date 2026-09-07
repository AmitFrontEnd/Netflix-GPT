const GPTSearchLoading = () => {
  const posters = Array.from({ length: 18 }, (_, i) => i);

  return (
    <div className="relative min-h-[45vh] w-full overflow-hidden bg-black flex flex-col items-center justify-center px-4 py-8">
      <div className="grid grid-cols-6 gap-2 w-full max-w-md mb-7 [perspective:600px]">
        {posters.map((i) => (
          <div
            key={i}
            className="
              aspect-[2/3] rounded
              bg-neutral-900 border border-white/10
              [transform-style:preserve-3d]
              animate-poster-flip
            "
            style={{
              animationDelay: `${(Math.random() * 2.2).toFixed(2)}s`,
              animationDuration: `${(1.8 + Math.random() * 1.2).toFixed(2)}s`,
            }}
          />
        ))}
      </div>

      <h2 className="mb-2.5 text-xl font-bold text-white sm:text-2xl text-center">
        Finding Your Perfect Movies
      </h2>

      <p className="max-w-md text-sm leading-6 text-gray-400 sm:text-base text-center">
        Sorting through the shelves for something worth your popcorn 🍿
      </p>
    </div>
  );
};

export default GPTSearchLoading;
