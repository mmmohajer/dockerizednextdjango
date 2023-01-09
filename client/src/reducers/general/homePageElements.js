import { createSlice } from '@reduxjs/toolkit';

const reducerObject = {};
reducerObject['setHomePageElements'] = (state, action) => action.payload;

const slice = createSlice({
  name: 'homePageElements',
  initialState: {
    about: null,
    services: null,
    experience: null,
    projects: null,
    testimonials: null,
    contact: null
  },
  reducers: reducerObject
});

export const { setHomePageElements } = slice.actions;
export default slice.reducer;
