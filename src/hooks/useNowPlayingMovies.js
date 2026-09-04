import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addNowPlayingMovies } from '../utils/movieSlice';

export const useNowPlayingMovies = () => {
  const nowPlayingMovies=useSelector(store=>store.movies.nowPlayingMovies)
  const dispatch = useDispatch();
  useEffect(() => {
    if(nowPlayingMovies) return
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS,
    )
      .then((res) => res.json())
      .then((res) => dispatch(addNowPlayingMovies(res.results)))
      .catch((err) => console.error(err));
  }, []);
}