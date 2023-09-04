import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Splash from '../Screens/Splash';
import SignUp from '../Screens/SignUp';
import SignIn from '../Screens/SignIn';
import Home from '../Screens/Home';
import Chat from '../Screens/Chat';


const Stack= createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <Stack.Navigator >
        <Stack.Screen name='Splash' component={Splash} options={{headerShown:false}} ></Stack.Screen>
               <Stack.Screen name='SignIn' component={SignIn} options={{headerShown:false}} ></Stack.Screen>
               <Stack.Screen name='SignUp' component={SignUp} options={{headerShown:false}} ></Stack.Screen>
               <Stack.Screen name='Home' component={Home} options={{headerShown:false}} ></Stack.Screen>
               <Stack.Screen name='Chat' component={Chat} options={{headerShown:false}} ></Stack.Screen>
    </Stack.Navigator>
  )
}

export default AppNavigator