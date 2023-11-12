import { createSlice } from '@reduxjs/toolkit';

const reducerObject = {};
reducerObject['showUserNav'] = (state, action) => true;
reducerObject['hideUserNav'] = (state, action) => false;
reducerObject['toggleUserNav'] = (state, action) => !state;

const slice = createSlice({
  name: 'userNavIsActive',
  initialState: false,
  reducers: reducerObject
});

export const { showUserNav, hideUserNav, toggleUserNav } = slice.actions;
export default slice.reducer;
