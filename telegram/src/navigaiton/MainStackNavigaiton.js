import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavigaiton from './bottomNavigaiton';
import ChatPrivate from '../screens/ChatPrivate';
import Login from '../screens/Login';
import {ChatUserContext} from '../context/chatUser';
import {Image, StyleSheet} from 'react-native';

const MainStackNavigaiton = () => {
  const MainStack = createNativeStackNavigator();
  const {chatUser} = useContext(ChatUserContext);

  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen name="Home" component={BottomNavigaiton} />
      <MainStack.Screen
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          title: `${chatUser.firstName} ${chatUser.lastName}`,
          headerRight: () => (
            <Image source={chatUser.image} style={styles.image} />
          ),
        }}
        name="Chat"
        component={ChatPrivate}
      />
      <MainStack.Screen name="Login" component={Login} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigaiton;

const styles = StyleSheet.create({
  image: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
});
