import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addPopularMovies } from '../utils/movieSlice';

export const usePopularMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
      .then(res => res.json())
      .then((res) => dispatch(addPopularMovies(res.results)))
      .catch((err) => console.error(err));
  }, []);
}