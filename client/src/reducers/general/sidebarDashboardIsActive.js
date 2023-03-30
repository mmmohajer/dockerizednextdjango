import { createSlice } from '@reduxjs/toolkit';

const reducerObject = {};
reducerObject['showSideBarDashboard'] = (state, action) => true;
reducerObject['hideSideBarDashboard'] = (state, action) => false;
reducerObject['toggleSideBarDashboard'] = (state, action) => !state;

const slice = createSlice({
  name: 'sideBarDashboardIsActive',
  initialState: true,
  reducers: reducerObject
});

export const { showSideBarDashboard, hideSideBarDashboard, toggleSideBarDashboard } = slice.actions;
export default slice.reducer;
