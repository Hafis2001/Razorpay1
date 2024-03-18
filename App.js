

import React from 'react';
import { StyleSheet,View,Text,Image } from 'react-native';

function App(){
  return(
    <View style={styles.Container}>
      <Text>test</Text>
<Image />
    </View>
  )
}

const styles=StyleSheet.create({
  Container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'grey'
  }
})
    

export default App;
