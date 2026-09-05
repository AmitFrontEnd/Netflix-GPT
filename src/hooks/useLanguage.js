import { useSelector } from "react-redux";

export const useLanguage = () => {
  const preferedLanguage = useSelector(
    (store) => store.userConfig.preferedLanguage,
  );
  return preferedLanguage
}
