import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTopRatedMovies } from '../utils/movieSlice';

export const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
      .then(res => res.json())
      .then((res) => dispatch(addTopRatedMovies(res.results)))
      .catch((err) => console.error(err));
  }, []);
}