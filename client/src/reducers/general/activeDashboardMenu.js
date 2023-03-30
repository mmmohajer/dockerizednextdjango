import { createSlice } from '@reduxjs/toolkit';

const reducerObject = {};
reducerObject['setActiveDashboardMenu'] = (state, action) => action.payload;

const slice = createSlice({
  name: 'activeDashboardMenu',
  initialState: '',
  reducers: reducerObject
});

export const { setActiveDashboardMenu } = slice.actions;
export default slice.reducer;
