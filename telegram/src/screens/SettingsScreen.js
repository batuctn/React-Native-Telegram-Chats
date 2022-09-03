import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useTheme from '../hooks/useTheme';

const SettingsScreen = () => {
  const {theme} = useTheme();
  const {navigate} = useNavigation();
  return (
    <View style={{...styles.contain, backgroundColor: theme.backgroundColor}}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://www.resimnet.net/wp-content/uploads/2021/02/whatsapp-profil-resmi-k8EV8.jpg',
        }}
      />
      <CustomButton
        title={'Theme'}
        onPress={() => {
          navigate('ThemeSettingsScreen');
        }}
      />
      <CustomButton
        title={'Edit Profile'}
        onPress={() => {
          navigate('ProfileSettingsScreen');
        }}
      />
      <CustomButton
        title={'Logout'}
        onPress={async () => {
          await AsyncStorage.removeItem('userStorage');
          navigate('Login');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 90,
    marginBottom: 90,
  },
});
export default SettingsScreen;
