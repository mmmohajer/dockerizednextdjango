import { createSlice } from '@reduxjs/toolkit';

const reducerObject = {};
reducerObject['showMobileNav'] = (state, action) => true;
reducerObject['hideMobileNav'] = (state, action) => false;
reducerObject['toggleMobileNav'] = (state, action) => !state;

const slice = createSlice({
  name: 'mobileNavIsActive',
  initialState: false,
  reducers: reducerObject
});

export const { showMobileNav, hideMobileNav, toggleMobileNav } = slice.actions;
export default slice.reducer;
