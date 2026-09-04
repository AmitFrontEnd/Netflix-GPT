import { useSelector } from "react-redux";
import MainContainer from "../components/MainContainer";
import RecommendSection from "../components/RecommendSection";
import GPTSearchPage from "../components/GPTSearchPage";

const Browse = () => {
  const isSearch = useSelector((state) => state.gpt.isSearch);
  return !isSearch ? (
    <>
      <MainContainer />
      <RecommendSection />
    </>
  ) : (
    <GPTSearchPage />
  );
};

export default Browse;
