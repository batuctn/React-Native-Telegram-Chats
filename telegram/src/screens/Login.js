import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useState, useContext} from 'react';
import CustomInput from '../components/CustomInput';
import {Picker} from '@react-native-picker/picker';
import {TextInput} from 'react-native-paper';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import {UserContext} from '../context/user';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const [country, setCountry] = useState(null);
  const {user, setUser} = useContext(UserContext);
  const {navigate} = useNavigation();

  const login = async () => {
    await AsyncStorage.setItem('userStorage', JSON.stringify(user));
    setUser(user);
  };

  return (
    <View style={styles.contain}>
      <Image
        resizeMode="cover"
        style={styles.telegramLogo}
        source={require('../assets/telegram.png')}
      />
      <Text style={styles.textTelegram}>Sign in to Telegram</Text>
      <Text style={styles.font14}>Please confirm your country and </Text>
      <Text style={styles.font14}> enter your phone number </Text>
      <Picker
        selectedValue={country}
        onValueChange={(value, index) => setCountry(value)}
        mode="dropdown" // Android only
        style={styles.picker}>
        <Picker.Item label="Please select your country" value="Unknown" />
        <Picker.Item label="Turkey" value="+90" />
        <Picker.Item label="Azerbaijan" value="+994" />
      </Picker>
      <CustomInput
        value={user.phone}
        onChangeText={newText => setUser({...user, phone: newText})}
        label={'Phone'}
        left={<TextInput.Affix text={country} />}
      />
      <CustomInput
        value={user.firstName}
        onChangeText={newText => setUser({...user, firstName: newText})}
        label={'First Name'}
      />
      <CustomInput
        value={user.lastName}
        onChangeText={newText => setUser({...user, lastName: newText})}
        label={'Last Name'}
      />
      <CustomInput
        value={user.username}
        onChangeText={newText => setUser({...user, username: newText})}
        label={'Username'}
      />
      <CustomButton
        title={'NEXT'}
        onPress={() => {
          login();
          navigate('Chats');
        }}
      />
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  contain: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  textTelegram: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    margin: 10,
  },
  telegramLogo: {
    height: 160,
    width: 160,
    marginBottom: 10,
  },
  font14: {
    fontSize: 14,
  },
  picker: {
    width: '90%',
    borderColor: '#666',
    backgroundColor: 'white',
    marginVertical: 10,
  },
});
