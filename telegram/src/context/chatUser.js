import {createContext} from 'react';

export const ChatUserContext = createContext({
  chatUser: {},
  setChatUser: () => {},
});
