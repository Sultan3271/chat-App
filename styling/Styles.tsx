import {Text,StyleSheet, Dimensions } from 'react-native'
import React from 'react'
export const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
    },
    logo:{
        fontSize:30,
        color:'#FFFFFF',
         padding:10,

    },
   form:{
    alignItems:'center',
    padding:10,
    margin:5,
    marginTop:15,
   },
   formField:{
    width:250,
    padding:10,
    backgroundColor:'#faedcd',
    margin:8,
    borderRadius:10,
    
    fontSize:18,
   },
   formBtn:{
    padding:10,
    
    backgroundColor:'#2a9d8f',
    margin:10,
    borderRadius:10,
     width:100,
     alignItems:'center'
   },
   formBtnText:{
    fontSize:18,
    fontFamily:'arial',
    color:'#FFFF',

   },
   modalView:{
   width: Dimensions.get("window").width,
   height: Dimensions.get("window").height,
   backgroundColor: 'rgba(0,0,0,.6)',
   justifyContent:'center',
   alignItems:'center'
   },
   mainView:{
    height:100,
    width:100,
    
    justifyContent:'center',
   
    borderRadius:50,
    alignItems:'center'
   },
   BottomTab:{
    position:'absolute',
    bottom:0,
    width:'110%',
    height:70,
    backgroundColor:'#e0e1dd',
    flexDirection:'row',
    justifyContent:'space-evenly',
alignItems:'center'
   },
   btnImg:{
    padding:5,
    margin:5,
    width:35,
    height:35,
    borderRadius:50,
    
   },
   usersList:{
    width:Dimensions.get('window').width-50,
    borderRadius:10,
    padding:10,
      
   },
   userBox:{
    flexDirection:'row',alignItems:'center',
    backgroundColor:'#FFFFFF',
    margin:3,
    borderRadius:10,
    padding:10,
    
   },

   
})