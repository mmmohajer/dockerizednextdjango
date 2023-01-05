export const chatSocketEventHandler = (chatSocket) => {
  chatSocket.onmessage = (message) => {
    try {
      const data = JSON.parse(message.data);
      console.log('Got chat websocket message', data);
    } catch (e) {
      console.log(e);
    }
  };

  chatSocket.addEventListener('open', (e) => {
    console.log('Public ChatSocket OPEN');
  });

  chatSocket.onclose = (e) => {
    console.error('Public ChatSocket closed.');
  };

  chatSocket.onOpen = (e) => {
    console.log('Public ChatSocket onOpen', e);
  };

  chatSocket.onerror = (e) => {
    console.log('Public ChatSocket error', e);
  };

  if (chatSocket.readyState == WebSocket.OPEN) {
    console.log('Public ChatSocket OPEN');
  } else if (chatSocket.readyState == WebSocket.CONNECTING) {
    console.log('Public ChatSocket connecting..');
  }
};

export const joinRoomHandler = (chatSocket, room_id) => {
  try {
    chatSocket.send(
      JSON.stringify({
        command: 'join',
        room_id
      })
    );
  } catch (err) {
    console.log(err);
  }
};

export const sendMessageInRoomHandler = (chatSocket, message) => {
  try {
    chatSocket.send(
      JSON.stringify({
        command: 'send',
        message
      })
    );
  } catch (e) {
    console.log(e);
  }
};

export const leaveRoomHandler = (chatSocket, room) => {
  try {
    chatSocket.send(
      JSON.stringify({
        command: 'leave',
        room
      })
    );
  } catch (err) {
    console.log(err);
  }
};

export const getRoomMessagesHandler = (chatSocket, page_number) => {
  try {
    chatSocket.send(
      JSON.stringify({
        command: 'get_room_chat_messages',
        page_number
      })
    );
  } catch (err) {
    console.log(err);
  }
};
