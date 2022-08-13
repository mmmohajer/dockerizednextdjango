import { createSlice } from '@reduxjs/toolkit';

const reducerObject = {};
reducerObject['setModalType'] = (state, action) => action.payload;
reducerObject['clearModalType'] = (state, action) => '';

const slice = createSlice({
  name: 'modalType',
  initialState: '',
  reducers: reducerObject
});

export const { setModalType, clearModalType } = slice.actions;
export default slice.reducer;
