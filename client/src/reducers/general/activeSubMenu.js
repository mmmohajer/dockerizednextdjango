import { createSlice } from '@reduxjs/toolkit';

const reducerObject = {};
reducerObject['setActiveSubMenu'] = (state, action) => action.payload;

const slice = createSlice({
  name: 'activeSubMenu',
  initialState: '',
  reducers: reducerObject
});

export const { setActiveSubMenu } = slice.actions;
export default slice.reducer;
