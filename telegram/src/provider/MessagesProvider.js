import React, {useState} from 'react';
import {MessagesContext} from '../context/messages';

const MessagesProvider = ({children}) => {
  const [messagesState, setMessagesState] = useState([]);

  return (
    <MessagesContext.Provider
      value={{
        messages: messagesState,
        setMessages: setMessagesState,
      }}>
      {children}
    </MessagesContext.Provider>
  );
};

export default MessagesProvider;
