import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTopRatedMovies } from '../utils/movieSlice';

export const useTopRatedMovies = () => {
    const topRatedMovies=useSelector(store=>store.movies.topRatedMovies)
  const dispatch = useDispatch();
  useEffect(() => {
    if(topRatedMovies) return
    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
      .then(res => res.json())
      .then((res) => dispatch(addTopRatedMovies(res.results)))
      .catch((err) => console.error(err));
  }, []);
}