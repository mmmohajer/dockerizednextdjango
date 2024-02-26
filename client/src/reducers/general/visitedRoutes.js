import { createSlice } from '@reduxjs/toolkit';

const NUMBER_OF_URLS_TO_STORE = 20;

const reducerObject = {};
reducerObject['addVistitedRoute'] = (state, action) => {
  const localRoutes = [...state];
  if (!state.length || (state.length && action.payload !== state[state.length - 1])) {
    localRoutes.push(action.payload);
  }
  return [...localRoutes.slice(-NUMBER_OF_URLS_TO_STORE)];
};
reducerObject['removeLastVistitedRoute'] = (state, action) => {
  let localRoutes = [...state];
  localRoutes.splice(-1, 1);
  return [...localRoutes.slice(-NUMBER_OF_URLS_TO_STORE)];
};

const slice = createSlice({
  name: 'visitedRoutes',
  initialState: [],
  reducers: reducerObject
});

export const { addVistitedRoute, removeLastVistitedRoute } = slice.actions;
export default slice.reducer;
