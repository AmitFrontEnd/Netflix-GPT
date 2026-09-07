import { lang } from "../../utils/languages";
import { useLanguage } from "../../hooks/useLanguage";
import { useRef } from "react";
import { useGptSearchMovies } from "../../hooks/useGptSearchMovies";
import { useSelector } from "react-redux";

const GPTSearch = () => {
  const searchGptMovies = useGptSearchMovies();
  const isFecthingGPTResult = useSelector(
    (store) => store.userConfig.isFecthingGPTResult,
  );
  const inputRef = useRef(null);

  const handleSearch = async () => {
    if (!inputRef.current.value.trim()) return;
    searchGptMovies(inputRef?.current.value);
  };

  const preferedLanguage = useLanguage();
  return (
    <div
      className="
        relative
        min-h-screen
        w-full
        bg-black
        overflow-hidden
        flex
        items-center
        justify-center
        px-4
      "
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-800/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 w-full max-w-2xl text-center">
        <h1
          className="
            text-white
            text-2xl sm:text-4xl md:text-5xl
            font-bold
            mb-3
            tracking-tight
          "
        >
          {lang[preferedLanguage].gptSearchTitle}
        </h1>
        <p className="text-gray-400 text-sm sm:text-base mb-8 md:mb-10">
          {lang[preferedLanguage].gptSearchDescription}
        </p>

        <div
          className="
            flex
            items-center
            gap-2
            bg-white/5
            backdrop-blur-md
            border border-gray-600/50
            rounded-full
            p-1.5 sm:p-2
            shadow-2xl
            focus-within:border-red-600
            transition
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-400 ml-3 shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 10-10.6-10.6 7.5 7.5 0 0010.6 10.6z"
            />
          </svg>

          <input
            ref={inputRef}
            type="text"
            placeholder={lang[preferedLanguage].gptSearchPlaceholder}
            className="
              flex-1
              bg-transparent
              outline-none
              text-white
              text-sm sm:text-base
              placeholder:text-gray-500
              py-2
              min-w-0
            "
          />

          <button
            disabled={isFecthingGPTResult}
            onClick={handleSearch}
            className="
    flex items-center justify-center gap-2
    bg-gradient-to-r from-red-600 to-red-700
    hover:from-red-500 hover:to-red-600
    disabled:opacity-70
    disabled:cursor-not-allowed
    text-white
    font-semibold
    text-sm sm:text-base
    px-4 sm:px-6
    py-2 sm:py-2.5
    rounded-full
    shadow-lg
    transition
    shrink-0
    min-w-[90px]
  "
          >
            {isFecthingGPTResult ? (
              <div className="h-5 w-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
            ) : (
              <>
                <span className="hidden sm:inline">
                  {lang[preferedLanguage].search}
                </span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GPTSearch;
