import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  const {goBack} = useNavigation();
  const shouldGoBack = title === 'Login';

  return (
    <View style={styles.contain}>
      <View>{shouldGoBack ? <Text onPress={goBack}>Go Back</Text> : null}</View>
      <Text>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  contain: {
    width: '100%',
    backgroundColor: 'red',
    paddingBottom: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
