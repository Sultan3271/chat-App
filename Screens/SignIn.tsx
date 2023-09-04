import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../styling/Styles';
import firestore from '@react-native-firebase/firestore';
import Loader from '../components/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';
const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 const [visible,setVisible]= useState(false)
  const logIn = () => {
     setVisible(true);
    firestore()
      .collection('Users')
      .where('email', '==', email)
      .get()
      .then( res => {
        setVisible(false);
        // console.log( JSON.stringify( res.docs[0].data()));
             goToNext(res.docs[0].data().email, res.docs[0].data().name, res.docs[0].data().userId);
         navigation.navigate('Home');
         setEmail("");
         setPassword("");
      }).catch(err => {
        setVisible(false);
        Alert.alert('User does not exist')
      });
  };


  const goToNext=(email,name,userId)=>{
  AsyncStorage.setItem("Name",name);
  AsyncStorage.setItem("Email",email);
  AsyncStorage.setItem("UserID",userId);
  }

  return (
    <View
      style={[
        styles.container,
        {alignItems: 'center', backgroundColor: '#0096c7'},
      ]}>
      <Text style={styles.logo}>SignIn</Text>
      <View style={styles.form}>
        <TextInput
          placeholder="Enter email..."
          value={email}
          style={styles.formField}
          onChangeText={txt => setEmail(txt)}></TextInput>
        <TextInput
          placeholder="Enter password..."
          value={password}
          style={styles.formField}
          onChangeText={txt => setPassword(txt)}></TextInput>

        <TouchableOpacity style={styles.formBtn} onPress={logIn}>
          <Text style={styles.formBtnText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={[styles.formBtnText, {textDecorationLine: 'underline'}]}
            onPress={() => navigation.navigate('SignUp')}>
            or Sign Up
          </Text>
        </TouchableOpacity>
        { visible && 
        <Loader  />
        }
      </View>
    </View>
  );
};

export default SignIn;
