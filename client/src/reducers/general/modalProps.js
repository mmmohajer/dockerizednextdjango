import { createSlice } from '@reduxjs/toolkit';

const reducerObject = {};
reducerObject['setModalProps'] = (state, action) => action.payload;
reducerObject['clearModalProps'] = (state, action) => {
  return {};
};

const slice = createSlice({
  name: 'modalProps',
  initialState: {},
  reducers: reducerObject
});

export const { setModalProps, clearModalProps } = slice.actions;
export default slice.reducer;
