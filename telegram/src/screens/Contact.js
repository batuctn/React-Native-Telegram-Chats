import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import React, {useContext} from 'react';
import chatData from '../data/ConcatList';
import {useNavigation} from '@react-navigation/native';
import Search from '../components/Search';
import {ChatUserContext} from '../context/chatUser';

const Contact = () => {
  const {navigate} = useNavigation();
  const {setChatUser} = useContext(ChatUserContext);
  const renderUser = ({item, index}) => (
    <TouchableOpacity
      onPress={async () => {
        navigate('Chat');
        setChatUser(item);
      }}>
      <ScrollView>
        <View style={styles.contain}>
          <View>
            <Image
              resizeMode="cover"
              source={item.image}
              style={styles.image}
            />
          </View>
          <View style={styles.chatScreen}>
            <View style={styles.fullNameTextView}>
              <Text style={styles.fullNameText}>
                {`${item.firstName} ${item.lastName}`}
              </Text>
            </View>
            <Text style={styles.messages}>{item.lastSeen}</Text>
          </View>
        </View>
      </ScrollView>
    </TouchableOpacity>
  );
  return (
    <View>
      <Search />
      <FlatList data={chatData} renderItem={renderUser} />
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    flexDirection: 'row',
  },
  chatScreen: {
    width: '90%',
    borderBottomWidth: 1,
    borderBottomColor: '#d3d3d3',
    margin: 2,
  },
  fullNameTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10,
  },
  fullNameText: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
    padding: 3,
  },
  padding3: {
    padding: 3,
  },
  messages: {
    marginLeft: 5,
    padding: 2,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 30,
    marginLeft: 8,
  },
});

export default Contact;
