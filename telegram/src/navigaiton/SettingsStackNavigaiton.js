import React from 'react';
import ProfileSettingsScreen from '../screens/ProfileSettingsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ThemeSettingsScreen from '../screens/ThemeSettingsScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import useTheme from '../hooks/useTheme';

const SettingsStackNav = createNativeStackNavigator();
const SettingsStackNavigator = () => {
  const {theme} = useTheme();
  return (
    <SettingsStackNav.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <SettingsStackNav.Screen
        name="SettingsScreen"
        component={SettingsScreen}
      />
      <SettingsStackNav.Screen
        options={{
          headerShown: true,
          title: 'Settings',
          headerTitleStyle: {color: theme.color},
        }}
        name="ThemeSettingsScreen"
        component={ThemeSettingsScreen}
      />
      <SettingsStackNav.Screen
        options={{headerShown: true, title: 'Settings'}}
        name="ProfileSettingsScreen"
        component={ProfileSettingsScreen}
      />
    </SettingsStackNav.Navigator>
  );
};
export default SettingsStackNavigator;
