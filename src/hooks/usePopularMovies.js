import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addPopularMovies } from '../utils/movieSlice';

export const usePopularMovies = () => {
    const popularMovies=useSelector(store=>store.movies.popularMovies)
  const dispatch = useDispatch();
  useEffect(() => {
    if(popularMovies) return
    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
      .then(res => res.json())
      .then((res) => dispatch(addPopularMovies(res.results)))
      .catch((err) => console.error(err));
  }, []);
}