import { createSlice } from '@reduxjs/toolkit';

const reducerObject = {};
reducerObject['setTestimonials'] = (state, action) => {
  return action.payload;
};

const slice = createSlice({
  name: 'testimonials',
  initialState: [],
  reducers: reducerObject
});

export const { setTestimonials } = slice.actions;
export default slice.reducer;
