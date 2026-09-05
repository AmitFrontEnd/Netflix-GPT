import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { useEffect } from 'react';
import { addTrailerInfo } from '../utils/movieSlice';

export const useTrailer = (movieId) => {
  const trailerInfo = useSelector(store => store.movies.trailerInfo)
  const dispatch = useDispatch();
  useEffect(() => {
    if (!movieId) return
    if (trailerInfo) return
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS,
    )
      .then((res) => res.json())
      .then((res) => {
        const filteredTypes = res.results.filter(
          (data) => data.type === "Trailer",
        );
        dispatch(addTrailerInfo(filteredTypes[0]));
      })
      .catch((err) => console.error(err));
  }, [movieId]);
}
