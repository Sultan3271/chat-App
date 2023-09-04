import { View, Text, FlatList, Image,TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from '../styling/Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';

const Users = () => {
  
  
  const [users, setUsers] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () => {
    AsyncStorage.getItem("Email")
      .then(userEmail => {
        firestore()
          .collection('Users')
          .where('email', '!=', userEmail)
          .get()
          .then(res => {
            const userData = res.docs.map(val => val.data());
            setUsers(userData); // Update the state with user data
           
            
            
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.logo,{textAlign:'center'}]}>Users</Text>
      <FlatList 
        style={styles.usersList}
        data={users}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={styles.userBox} onPress={() =>navigation.navigate('Chat',{data:item})}>
          
            <Image style={styles.btnImg} source={{ uri: 'https://cdn-icons-png.flaticon.com/128/503/503849.png' }} />
          <Text>{item.name}</Text> 
          </TouchableOpacity>
        )}
         
      />
    </View>
  )
}

export default Users;
