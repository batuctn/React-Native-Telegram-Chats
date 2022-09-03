import {View, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const FooterChat = ({onChange, value, onPressSendClick}) => {
  const [isActive, setIsActive] = useState(true);

  return (
    <View style={styles.contain}>
      <Icons
        style={styles.marginleft5}
        name="attachment"
        size={24}
        color="#949494"
      />
      <View style={styles.textInputView}>
        <TextInput
          value={value}
          style={styles.textInput}
          onChangeText={onChange}
          onFocus={() => {
            setIsActive(false);
          }}
        />
      </View>
      {isActive === true ? (
        <View style={styles.leftIconView}>
          <MaterialCommunityIcons
            name="sticker-circle-outline"
            size={26}
            color="#949494"
          />
          <Icon name="ios-mic-outline" size={30} color="#949494" />
        </View>
      ) : (
        <View style={styles.leftIconView}>
          <Feather
            name="smile"
            size={22}
            color="#949494"
            style={styles.featherStyle}
          />
          <Icon
            name="arrow-up-circle-sharp"
            size={35}
            color="blue"
            onPress={onPressSendClick}
            style={styles.marginRight}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 0.19,
    minHeight: '7%',
    backgroundColor: '#d3d3d3',
  },
  textInputView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    margin: 8,
  },
  textInput: {
    minWidth: '73%',
    height: 35,
  },
  leftIconView: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
  marginleft5: {
    marginLeft: 5,
  },
  featherStyle: {
    right: 25,
    top: 5,
  },
  marginRight: {
    marginRight: 25,
  },
});

export default FooterChat;
