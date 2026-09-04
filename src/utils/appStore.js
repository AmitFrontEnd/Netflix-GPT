import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import movieReducer from './movieSlice'
import toggleButtonReducer from './toggleButtonSlice'
import userConfigReducer from './userConfigSlice'
export const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gpt:toggleButtonReducer,
    userConfig:userConfigReducer
  },
})