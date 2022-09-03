import {
  ImageBackground,
  Text,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import FooterChat from '../components/FooterChat';
import {MessagesContext} from '../context/messages';
import {ChatUserContext} from '../context/chatUser';
import {UserContext} from '../context/user';

const ChatPrivate = ({route}) => {
  const [answer, setAnswer] = useState(null);
  const [message, setMessage] = useState([]);
  const {messages, setMessages} = useContext(MessagesContext);
  const {chatUser} = useContext(ChatUserContext);
  const {user} = useContext(UserContext);
  const handleClick = () => {
    setMessage([...message, answer]);
    setAnswer(null);
  };

  useEffect(() => {
    if (message.length > 0) {
      if (messages.find(item => item.reciverId === chatUser.id)) {
        const data = messages.filter(mes => {
          if (mes.reciverId === chatUser.id) {
            return mes;
          }
        });
        data[0].msj = [...message];
      } else {
        const newAr = messages;
        newAr.push({
          msj: message,
          reciverId: chatUser.id,
          firstName: chatUser.firstName,
          lastName: chatUser.lastName,
          image: chatUser.image,
          lastSeen: chatUser.lastSeen,
          sender: user.username,
        });
        setMessages(newAr);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  useEffect(() => {
    if (messages.length > 0) {
      const oldMes = messages.filter(mes => {
        if (mes.reciverId === chatUser.id) {
          return mes;
        }
      });
      if (oldMes.length > 0) {
        console.log(oldMes);
        setMessage(oldMes[0].msj);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [messages]);
  // yukarda useeffect her context değiştiğinde eski mesajı contexte kaydetmele çalıştım messages contexini deep'ine vermeme rağmen eslint hataasına veriyodu
  let tarih = new Date();
  var saat = tarih.getHours() + 3;
  var dakika = tarih.getMinutes();

  return (
    <ImageBackground
      style={styles.contain}
      source={require('../assets/background.jpg')}
      resizeMode="cover">
      <View style={styles.contain}>
        <ScrollView>
          <View>
            {message.map((item, index) => {
              return (
                <View key={index} style={styles.answerWiew}>
                  <Text
                    onPress={() => {
                      console.log(messages);
                    }}
                    style={styles.responseMessage}>
                    {item}
                  </Text>
                  <View style={styles.datetime}>
                    <Text>{`${saat}:${dakika}`}</Text>
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
        <FooterChat
          value={answer}
          onChange={newText => {
            setAnswer(newText);
          }}
          onPressSendClick={handleClick}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  contain: {
    height: '100%',
  },
  responseWiew: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  responseMessage: {
    color: 'black',
    textAlign: 'center',
    marginLeft: 4,
    fontSize: 16,
  },
  answerWiew: {
    backgroundColor: '#25D366',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    margin: 10,
    padding: 10,
    borderRadius: 10,
  },
  datetime: {
    marginLeft: 15,
    top: 8,
  },
});
export default ChatPrivate;
