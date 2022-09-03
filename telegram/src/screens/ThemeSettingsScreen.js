import {View, StyleSheet} from 'react-native';
import React from 'react';
import CustomButton from '../components/CustomButton';
import useTheme from '../hooks/useTheme';

const ThemeSettingsScreen = () => {
  const {theme, toggleThemeLight, toggleThemeDark} = useTheme();

  return (
    <View style={{...styles.contain, backgroundColor: theme.backgroundColor}}>
      <CustomButton title={'Dark'} onPress={toggleThemeLight} />
      <CustomButton title={'Light'} onPress={toggleThemeDark} />
    </View>
  );
};

export default ThemeSettingsScreen;

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
