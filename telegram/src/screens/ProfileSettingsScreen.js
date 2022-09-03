import {View, StyleSheet} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import CustomInput from '../components/CustomInput';
import {UserContext} from '../context/user';
import CustomButton from '../components/CustomButton';
import useTheme from '../hooks/useTheme';

const ProfileSettingsScreen = () => {
  const {user, setUser} = useContext(UserContext);
  const {theme} = useTheme();
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    username: '',
  });

  useEffect(() => {
    if (user) {
      console.log(user);
      setNewUser({
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
      });
    }
  }, [user]);

  return (
    <View style={{...styles.contain, backgroundColor: theme.backgroundColor}}>
      <CustomInput
        value={newUser.firstName}
        onChangeText={newText => setNewUser({...newUser, firstName: newText})}
        label={'First Name'}
      />
      <CustomInput
        value={newUser.lastName}
        onChangeText={newText => setNewUser({...newUser, lastName: newText})}
        label={'Last Name'}
      />
      <CustomInput
        value={newUser.username}
        onChangeText={newText => setNewUser({...newUser, username: newText})}
        label={'Username'}
      />
      <CustomButton
        title={'Save'}
        onPress={() => {
          setUser(newUser);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});
export default ProfileSettingsScreen;
