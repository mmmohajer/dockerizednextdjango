import { createSlice } from '@reduxjs/toolkit';

const reducerObject = {};
reducerObject['isLoading'] = (state, action) => state + 1;
reducerObject['isLoaded'] = (state, action) => {
  if (state > 0) {
    return state - 1;
  } else {
    return 0;
  }
};

const slice = createSlice({
  name: 'loading',
  initialState: 0,
  reducers: reducerObject
});

export const { isLoading, isLoaded } = slice.actions;
export default slice.reducer;
