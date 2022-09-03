import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import UserProvider from './provider/UserProvider';
import ThemeProvider from './provider/ThemeProvider';
import MessagesProvider from './provider/MessagesProvider';
import MainStackNavigaiton from './navigaiton/MainStackNavigaiton';
import ChatUserProvider from './provider/ChatUserProvider';

function Router() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <NavigationContainer>
          <UserProvider>
            <ChatUserProvider>
              <MessagesProvider>
                <MainStackNavigaiton />
              </MessagesProvider>
            </ChatUserProvider>
          </UserProvider>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
export default Router;
