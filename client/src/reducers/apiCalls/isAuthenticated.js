import { createSlice } from '@reduxjs/toolkit';

const reducerObject = {};
reducerObject['authenticated'] = (state, action) => {
  return { isChecked: true, authenticated: true };
};
reducerObject['notAuthenticated'] = (state, action) => {
  return { isChecked: true, authenticated: false };
};

const slice = createSlice({
  name: 'isAuthenticated',
  initialState: { isChecked: false, authenticated: false },
  reducers: reducerObject
});

export const { authenticated, notAuthenticated } = slice.actions;
export default slice.reducer;
