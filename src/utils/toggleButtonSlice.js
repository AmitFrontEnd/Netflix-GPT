import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isSearch: false
}

export const toggleButtonSlice = createSlice({
  name: 'gptSearch',
  initialState,
  reducers: {
    toggleButton: (state) => {
      state.isSearch = !state.isSearch
    },
  }
})

export const { toggleButton } = toggleButtonSlice.actions

export default toggleButtonSlice.reducer