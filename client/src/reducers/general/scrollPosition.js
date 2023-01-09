import { createSlice } from '@reduxjs/toolkit';

const reducerObject = {};
reducerObject['setScrollPosition'] = (state, action) => action.payload;

const slice = createSlice({
  name: 'scrollPosition',
  initialState: 0,
  reducers: reducerObject
});

export const { setScrollPosition } = slice.actions;
export default slice.reducer;
