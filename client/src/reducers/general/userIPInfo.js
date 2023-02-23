import { createSlice } from '@reduxjs/toolkit';

const reducerObject = {};
reducerObject['setUserIPInfo'] = (state, action) => action.payload;

const slice = createSlice({
  name: 'userIPInfo',
  initialState: {},
  reducers: reducerObject
});

export const { setUserIPInfo } = slice.actions;
export default slice.reducer;
