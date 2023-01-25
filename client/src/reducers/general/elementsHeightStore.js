import { createSlice } from '@reduxjs/toolkit';

const reducerObject = {};
reducerObject['setElementsHeightStore'] = (state, action) => action.payload;

const slice = createSlice({
  name: 'elementsHeightStore',
  initialState: {},
  reducers: reducerObject
});

export const { setElementsHeightStore } = slice.actions;
export default slice.reducer;
