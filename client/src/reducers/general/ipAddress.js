import { createSlice } from '@reduxjs/toolkit';

const reducerObject = {};
reducerObject['setIpAddress'] = (state, action) => action.payload;
reducerObject['clearIpAddress'] = (state, action) => '';

const slice = createSlice({
  name: 'ipAddress',
  initialState: '',
  reducers: reducerObject
});

export const { setIpAddress, clearIpAddress } = slice.actions;
export default slice.reducer;
