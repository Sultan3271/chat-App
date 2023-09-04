import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from '../styling/Styles'
import AsyncStorage from '@react-native-async-storage/async-storage';
const Splash = ({navigation}) => {
    
    useEffect(()=>{
        setTimeout(()=>{
          const uId= AsyncStorage.getItem("UserID");
          if(uId != null){
            navigation.navigate('Home');
          }
          else{
            navigation.navigate('SignIn');
          }
        },1000)
    })
  return (
    <View style={[styles.container,{backgroundColor:'gray', alignItems:'center'}]}>
      <Text style={styles.logo}>My Chat App</Text>
    </View>
  )
}

export default Splash