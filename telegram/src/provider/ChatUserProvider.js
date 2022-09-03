import React, {useState} from 'react';
import {ChatUserContext} from '../context/chatUser';

const ChatUserProvider = ({children}) => {
  const [chatUser, setChatUser] = useState({});

  return (
    <ChatUserContext.Provider
      value={{
        chatUser: chatUser,
        setChatUser: setChatUser,
      }}>
      {children}
    </ChatUserContext.Provider>
  );
};

export default ChatUserProvider;
