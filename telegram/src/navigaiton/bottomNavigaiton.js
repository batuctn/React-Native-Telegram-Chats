/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useContext, useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Contact from '../screens/Contact';
import SettingsStackNavigator from './SettingsStackNavigaiton';
import {
  Image,
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Search from '../components/Search';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {UserContext} from '../context/user';
import {MessagesContext} from '../context/messages';

const BottomNav = createBottomTabNavigator();
const BottomNavigaiton = ({route}) => {
  const {navigate} = useNavigation();
  const {setUser} = useContext(UserContext);
  const [chat, setChat] = useState([]);
  // const {setChatUser} = useContext(ChatUserContext);
  const {messages} = useContext(MessagesContext);
  //giriş yaptığında kullanıcı yoksa logine yönlendirecek.
  const getUserStorageData = useCallback(async () => {
    const userStorage = JSON.parse(await AsyncStorage.getItem('userStorage'));
    console.log(userStorage);
    if (!userStorage || userStorage === null || userStorage === '') {
      navigate('Login');
    } else {
      setUser(userStorage);
    }
  }, []);

  //Burada deep arrayı boş olduğu için hata veriyor anca bi kere çalışması lazım bu fonskiyonun eslint o yüzden bu sayfada deep array eslint önerisini kapaatım.
  //Kullanıcı kontrolunu yapıyorum giriş yaparken contexte ve asyncstorage kaydetip .
  useEffect(() => {
    getUserStorageData();
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      setChat(messages);
      console.log(messages);
    }
  }, [route]);
  //Home componentim başka sayfada iki o sayfada context'de problem veri almada sorun yaşadığım için buraya taşımak zorunda kaldım.
  const Home = () => {
    return (
      <View>
        <Search />
        {chat.reverse().map((item, index) => {
          return (
            <View key={index}>
              <TouchableOpacity
                onPress={() => {
                  navigate('Chat');
                }}>
                <ScrollView>
                  <View style={styles.messagesView}>
                    <Image
                      resizeMode="cover"
                      source={item.image}
                      style={styles.image}
                    />
                    <View>
                      <Text
                        style={
                          styles.sendMessageText
                        }>{`${item.firstName} ${item.lastName}`}</Text>
                      {/* son elemanı alabilmek için length-1 kullandım */}
                      <Text>{item.msj[item.msj.length - 1]}</Text>
                    </View>
                  </View>
                </ScrollView>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    );
  };

  return (
    <BottomNav.Navigator
      initialRouteName="Chats"
      screenOptions={{
        headerShown: true,
        headerTitleAlign: 'center',
      }}>
      <BottomNav.Screen
        options={{
          headerLeft: () => <Text style={styles.headerLeft}>Sort</Text>,
          headerRight: () => (
            <Icon
              name="plus"
              style={styles.margin10}
              size={27}
              color="#3390ec"
            />
          ),
          tabBarIcon: ({size, color}) => (
            <Icon name={'users'} color={color} size={size} />
          ),
        }}
        name="Contact"
        component={Contact}
      />
      <BottomNav.Screen
        options={{
          headerLeft: () => <Text style={styles.headerLeft}>Edit</Text>,
          headerRight: () => (
            <Icon
              name="edit"
              style={styles.margin10}
              size={27}
              color="#3390ec"
            />
          ),
          tabBarIcon: ({size, color}) => (
            <Icon name={'message-circle'} color={color} size={size} />
          ),
        }}
        name="Chats"
        component={Home}
      />
      <BottomNav.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({size, color}) => (
            <Icon name={'settings'} color={color} size={size} />
          ),
        }}
        name="Settings"
        component={SettingsStackNavigator}
      />
    </BottomNav.Navigator>
  );
};

export default BottomNavigaiton;

const styles = StyleSheet.create({
  messagesView: {flexDirection: 'row', backgroundColor: 'white'},
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    margin: 5,
  },
  sendMessageText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  headerLeft: {
    color: '#3390ec',
    fontSize: 18,
    marginLeft: 10,
  },
  margin10: {
    marginRight: 10,
  },
});
