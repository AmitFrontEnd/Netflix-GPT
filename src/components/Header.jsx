import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { toggleButton } from "../utils/toggleButtonSlice";
import { changePreferedLanguage } from "../utils/userConfigSlice";
import { AVAILABLE_LANGUAGES } from "../utils/constants";
import { lang } from "../utils/languages";
import { useLanguage } from "../hooks/useLanguage";
const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const preferedLanguage = useLanguage();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <header className="absolute top-0 left-0 w-full p-4 md:p-8 z-50 flex justify-between items-center bg-gradient-to-b from-black/60 to-transparent">
      <div>
        <img src="./logo.svg" alt="Netflix Logo" className="w-30" />
      </div>

      {user && (
        <div className="flex items-center gap-2 md:gap-4">
          {/* Language Select */}
          <select
            onChange={(e) => {
              dispatch(changePreferedLanguage(e.target.value));
            }}
            className="
              appearance-none
              bg-black/60
              backdrop-blur-sm
              text-white
              text-xs md:text-sm
              font-medium
              border border-gray-500/60
              rounded-md
              pl-3 pr-7
              md:pl-4 md:pr-8
              py-1.5 md:py-2
              cursor-pointer
              outline-none
              hover:border-white
              hover:bg-black/80
              transition
              bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22white%22 stroke-width=%222.5%22><path stroke-linecap=%22round%22 stroke-linejoin=%22round%22 d=%22M19 9l-7 7-7-7%22/></svg>')]
              bg-no-repeat
              bg-[length:12px]
              bg-[right_10px_center]
              [&>option]:bg-black
              [&>option]:text-white
  "
          >
            {AVAILABLE_LANGUAGES.map(({ identifier, language }) => {
              return (
                <option key={identifier} value={identifier}>
                  {language}
                </option>
              );
            })}
          </select>

          {/* GPT Search Button */}
          <button
            onClick={() => {
              dispatch(toggleButton());
            }}
            className="
              flex items-center gap-1.5
              bg-gradient-to-r from-red-600 to-red-700
              hover:from-red-500 hover:to-red-600
              text-white
              text-xs md:text-sm
              font-semibold
              px-3 py-1.5
              md:px-4 md:py-2
              rounded-sm
              shadow-md
              transition
              cursor-pointer
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5 h-3.5 md:w-4 md:h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 10-10.6-10.6 7.5 7.5 0 0010.6 10.6z"
              />
            </svg>
            <span className="hidden sm:inline">
              {lang[preferedLanguage].searchButton}
            </span>
          </button>

          {/* Sign Out */}
          <button
            className="bg-red-600 text-white p-2 rounded-sm cursor-pointer hover:bg-red-700 transition"
            onClick={handleSignOut}
          >
            {lang[preferedLanguage].SignOutButton}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
