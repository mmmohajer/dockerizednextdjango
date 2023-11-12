import { createSlice } from '@reduxjs/toolkit';

const reducerObject = {};
reducerObject['setCurUserGroup'] = (state, action) => action.payload;

const slice = createSlice({
  name: 'curUserGroup',
  initialState: '',
  reducers: reducerObject
});

export const { setCurUserGroup } = slice.actions;
export default slice.reducer;
