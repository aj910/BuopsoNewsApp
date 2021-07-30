import React from 'react';
import { 
  StyleSheet, 
  View, 
  Image, 
  
} from 'react-native';

export default function Splash() {
  
  return (
    <View style={styles.container}>
      <Image 
        source={require("./src/assets/Buopso-News.png")}
        style={{width: 300, height: 190, marginTop: -150}}/>
     
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  }, 

});
