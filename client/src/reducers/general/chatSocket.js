import { createSlice } from '@reduxjs/toolkit';

const reducerObject = {};
reducerObject['setPublicChatSocket'] = (state, action) => {
  const newState = { ...state };
  newState['publicChatSocket'] = action.payload;
  return newState;
};
reducerObject['setPrivateChatSocket'] = (state, action) => {
  const newState = { ...state };
  newState['privateChatSocket'] = action.payload;
  return newState;
};
reducerObject['clearPublicChatSocket'] = (state, action) => {
  const newState = { ...state };
  newState['publicChatSocket'] = null;
  return newState;
};
reducerObject['clearPrivateChatSocket'] = (state, action) => {
  const newState = { ...state };
  newState['privateChatSocket'] = null;
  return newState;
};
reducerObject['enablePublicChat'] = (state, action) => {
  const newState = { ...state };
  newState['usePublicChat'] = true;
  return newState;
};
reducerObject['enablePrivateChat'] = (state, action) => {
  const newState = { ...state };
  newState['usePrivateChat'] = true;
  return newState;
};
reducerObject['disablePublicChat'] = (state, action) => {
  const newState = { ...state };
  newState['usePublicChat'] = false;
  return newState;
};
reducerObject['disablePrivateChat'] = (state, action) => {
  const newState = { ...state };
  newState['usePrivateChat'] = false;
  return newState;
};
reducerObject['clearChatSocket'] = (state, action) => {
  return {
    publicChatSocket: null,
    privateChatSocket: null,
    usePrivateChat: false,
    usePrivateChat: false
  };
};

const slice = createSlice({
  name: 'chatSocket',
  initialState: {
    publicChatSocket: null,
    privateChatSocket: null,
    usePublicChat: false,
    usePrivateChat: false
  },
  reducers: reducerObject
});

export const {
  setPublicChatSocket,
  setPrivateChatSocket,
  clearPublicChatSocket,
  clearPrivateChatSocket,
  enablePublicChat,
  enablePrivateChat,
  disablePublicChat,
  disablePrivateChat,
  clearChatSocket
} = slice.actions;
export default slice.reducer;
