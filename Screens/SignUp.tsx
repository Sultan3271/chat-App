import { View, Text, TextInput, Alert, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../styling/Styles'
import firestore from '@react-native-firebase/firestore';
import uuid from 'react-native-uuid';
const SignUp = ({navigation}) => {


    const [name,setName] = useState("");
    const [email,setEmail]= useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");

 const register=()=>{
    if(email=="" || password=="" || confirmPassword=="" ||  name == "" ){
        Alert.alert('All fields are required');
    }
    else if( password !== confirmPassword){
        Alert.alert('Both password and confirm password should be same');
    }
    else{
     const userId= uuid.v4();
     firestore()
  .collection('Users')
  .doc(`${userId}`)
  .set({
    name: name,
    email: email,
    password: password,
    userId: userId
  })
  .then(() => {
    console.log('User added!');
  }).catch(() => {
    console.log('something wrong happened!');
    
  });

  setName("");
  setEmail("");
  setPassword("");
  setConfirmPassword("");
  Alert.alert('Registered Successfully!');
  setTimeout(() => {
    navigation.navigate('SignIn');
  }, 1000);
}
 }

  return (
    <View style={[styles.container,{alignItems:'center', backgroundColor:'#0096c7'}]}>
      <Text style={styles.logo}>SignUp</Text>
       <View style={styles.form}>
         <TextInput placeholder='Enter name...' value={name} style={styles.formField} onChangeText={(txt)=>setName(txt)}>

         </TextInput>
         <TextInput placeholder='Enter email...' value={email} style={styles.formField} onChangeText={(txt)=>setEmail(txt)}>

         </TextInput>
         <TextInput  placeholder='Enter password...' value={password} style={styles.formField} onChangeText={(txt)=>setPassword(txt)}>

         </TextInput>
         <TextInput  placeholder='Confirm password...' value={confirmPassword} style={styles.formField} onChangeText={(txt)=>setConfirmPassword(txt)}>

         </TextInput>
         <TouchableOpacity style={styles.formBtn} onPress={register}>
            <Text style={styles.formBtnText}>
              Sign Up
            </Text>
         </TouchableOpacity>
         <TouchableOpacity >
            <Text style={[styles.formBtnText,{textDecorationLine:'underline'}]} onPress={()=>navigation.navigate('SignIn')}>
             or Sign In
            </Text>
         </TouchableOpacity>
         
       </View>
    </View>
  )
}

export default SignUp