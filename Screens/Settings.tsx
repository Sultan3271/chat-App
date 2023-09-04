import { View, Text, Button } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
const Settings = () => {
  const navigation = useNavigation();
  function logOut(){
    AsyncStorage.setItem("Name",'');
    AsyncStorage.setItem("Email",'');
    AsyncStorage.setItem("UserID",'');
    navigation.navigate('SignIn');
  }
  return (
    <View>
      <Text>Settings</Text>
      <Button title='log out' onPress={logOut} />
    </View>
  )
}

export default Settings