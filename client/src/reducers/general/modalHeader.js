import { createSlice } from '@reduxjs/toolkit';

const reducerObject = {};
reducerObject['setModalHeader'] = (state, action) => action.payload;
reducerObject['clearModalHeader'] = (state, action) => '';

const slice = createSlice({
  name: 'modalHeader',
  initialState: '',
  reducers: reducerObject
});

export const { setModalHeader, clearModalHeader } = slice.actions;
export default slice.reducer;
