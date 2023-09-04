import { View, Text,Modal, ActivityIndicator } from 'react-native'
import React from 'react'
import { styles } from '../styling/Styles'

const Loader = () => {
  return (
    <Modal visible transparent>
<View style={styles.modalView}>
    <View style={styles.mainView}>
<ActivityIndicator  size={'large'}/>
    </View>
</View>
    </Modal>
  )
}

export default Loader