import React from 'react'
import { useSelector } from 'react-redux'
import { lang } from '../utils/languages'

const useMovieListDetails = () => {
  const preferedLang = useSelector(store => store.userConfig.preferedLanguage)
  const movies = useSelector(store => store.movies)
  return [
    {
      title: lang[preferedLang].nowPlaying,
      error: movies.nowPlayingMoviesError,
      movies: movies.nowPlayingMovies
    },
    {
      title: lang[preferedLang].popular,
      error: movies.popularMoviesError,
      movies: movies.popularMovies
    },
    {
      title: lang[preferedLang].topRated,
      error: movies.topRatedMoviesError,
      movies: movies.topRatedMovies
    },
  ]
}

export default useMovieListDetails