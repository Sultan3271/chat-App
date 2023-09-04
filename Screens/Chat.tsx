import { Text, View } from 'react-native';
import React, { useState, useCallback, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { styles } from '../styling/Styles';
import { useRoute } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Chat = () => {
  const route = useRoute();
  const [messages, setMessages] = useState([]);
  const id = AsyncStorage.getItem('UserID');
  const chatId = route.params?.userId + id;

  useEffect(() => {
    // Function to fetch and load previous messages
    const loadPreviousMessages = async () => {
      try {
        const messageSnapshot = await firestore()
          .collection('Chats')
          .doc(chatId)
          .collection('Messages')
          .orderBy('createdAt', 'desc')
          .get();

        const previousMessages = messageSnapshot.docs.map(doc => {
          const message = doc.data();
          const isSentByCurrentUser = message.senderId === id;
          return {
            _id: doc.id,
            text: message.text,
            createdAt: message.createdAt.toDate(),
            user: {
              _id: isSentByCurrentUser ? id : route.params?.userId,
           
            },
          };
        });

        // Set the previous messages in the state
        setMessages(previousMessages);
      } catch (error) {
        console.error('Error loading previous messages: ', error);
      }
    };

    // Load previous messages when the component mounts
    loadPreviousMessages();
  }, [chatId]);

  const onSend = useCallback((messages = []) => {
    const newMessage = messages[0];

    firestore()
      .collection('Chats')
      .doc(chatId)
      .collection('Messages')
      .add({
        text: newMessage.text,
        createdAt: newMessage.createdAt,
        senderId: id,
      });

    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <View style={styles.container}>
      <GiftedChat
  messages={messages}
  onSend={messages => onSend(messages)}
  user={{
    _id: id,
  }}

/>
    </View>
  );
};

export default Chat;
