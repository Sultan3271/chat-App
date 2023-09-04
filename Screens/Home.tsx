import { View, Text,TouchableOpacity,Image } from 'react-native'
import React,{useState} from 'react'
import { styles } from '../styling/Styles'
import Settings from './Settings';
import Users from './Users';

const Home = () => {
    const [currentTab, setCurrentTab]= useState(0);
  return (
    <View style={[styles.container,{backgroundColor:'#0096c7',alignItems:'center'}]}>
        { currentTab == 0 ? <Users /> : <Settings />
        }
     <View style={styles.BottomTab}>
         <TouchableOpacity  onPress={()=>{
            setCurrentTab(0)
         }}>
            <Image style={[styles.btnImg,{tintColor: currentTab == 0 ? 'blue' : 'black' }]} source={{uri:'https://cdn-icons-png.flaticon.com/128/3033/3033143.png'}}/>
                         </TouchableOpacity>
                         <TouchableOpacity  onPress={()=>{
            setCurrentTab(1)
         }}>
            <Image style={[styles.btnImg,{tintColor: currentTab == 1 ? 'blue' : 'black' }]} source={{uri:'https://cdn-icons-png.flaticon.com/128/3384/3384443.png'}}/>
                         </TouchableOpacity>
     </View>
    </View>
  )
}

export default Home