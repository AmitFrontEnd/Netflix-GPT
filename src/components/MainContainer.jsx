import VideoPlayer from "./VideoPlayer";
import { useSelector } from "react-redux";
import VideoInfo from "./VideoInfo";
const MainContainer = () => {
  const movies = useSelector((store) => store.movies.nowPlayingMovies);

  if (!movies?.length) return null;

  const mainMovie = movies[0];

  return (
    <div className="relative w-full h-[70vh] md:h-screen overflow-hidden">
      <VideoPlayer movieId={mainMovie.id} />

      <VideoInfo title={mainMovie.title} overview={mainMovie.overview} />
    </div>
  );
};

export default MainContainer;
