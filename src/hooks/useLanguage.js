import { useSelector } from "react-redux";

export const useLanguage = () => {
  const preferedLanguage = useSelector(
    (state) => state.userConfig.preferedLanguage,
  );
  return preferedLanguage
}
