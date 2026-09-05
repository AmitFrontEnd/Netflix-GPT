import React from 'react'
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addGptMoviesArray } from "../utils/userConfigSlice";
import { useDispatch, useSelector } from 'react-redux';
export const useGetMoviesResults = () => {

  const dispatch = useDispatch();
  const gptFinalMoviesResult = useSelector(store => store.userConfig.finalMoviesArray)
  const gptMoviesTitles = useSelector(
    (store) => store.userConfig.gptMoviesTitles,
  );
  const gptMoviesArrays = gptMoviesTitles ? gptMoviesTitles.split(",") : [];
  useEffect(() => {
    if (!gptMoviesTitles) return;
    if (!gptFinalMoviesResult)
      getMoviesResults();
  }, [gptMoviesTitles]);

  const getMoviesResults = async () => {
    const resPromises = gptMoviesArrays.map((movie) => {
      return fetch(
        `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
        API_OPTIONS,
      );
    });

    const response = await Promise.all(resPromises);
    const dataPromises = response.map((res) => res.json());
    const data = await Promise.all(dataPromises);
    const finalMoviesArray = data.map((result) => result.results[0]).filter(movie => movie);
    dispatch(addGptMoviesArray(finalMoviesArray));
  };
}