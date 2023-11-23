import { createSlice } from '@reduxjs/toolkit';

const reducerObject = {};
reducerObject['isLoading'] = (state, action) => state + 1;
reducerObject['isLoaded'] = (state, action) => state - 1;

const slice = createSlice({
  name: 'loading',
  initialState: 0,
  reducers: reducerObject
});

export const { isLoading, isLoaded } = slice.actions;
export default slice.reducer;
