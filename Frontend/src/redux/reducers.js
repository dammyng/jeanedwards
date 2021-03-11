import { createSlice } from '@reduxjs/toolkit';


export const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    list: [],
    selected: {},
    history: [],
    newError:false
  },
  reducers: {
    loadMovie: (state, action) => {
      return {
        ...state,
        list: [...action.payload],
      }
    },
    appendHistory: (state, action) => {
      return {
        ...state,
        history: [...action.payload],
      }
    },
    selectMovie: (state, action) => {
      return {
        ...state,
        selected: action.payload,
      }
    },
    clearSelected: (state, action) => {
      return {
        ...state,
        selected: action.payload,
      }
    },
    newError: (state, action) => {
      return {
        ...state,
        newError: action.payload,
      }
    }
  },
});

export default moviesSlice.reducer;
