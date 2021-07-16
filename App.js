import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TextInput, 
  TouchableOpacity, 
  Button
} from 'react-native';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Image 
        source={require("./assets/Buopso-News.png")}
        style={{width: 300, height: 190, marginTop: -150}}/>
     
      <View>
      <TextInput
        style={styles.inputView}
        placeholder="email@address.com" 
        placeholderTextColor="#a9a9a9"
        onChangeText={(email) => setEmail(email)}
      /> 
    </View>

    <View>
      <TextInput
        style={styles.inputView}
        placeholder="........"
        placeholderTextColor="#a9a9a9"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
        />
    </View>

    <TouchableOpacity style={styles.loginBtn}>
      <Text style={styles.loginText}>LOGIN</Text>
    </TouchableOpacity>

    <Text style={styles.white}>
      ______ Or Continue With ______
    </Text>

    <View>
      <TouchableOpacity style={styles.googleBtn}>
        <Text style={styles.googleText}>Google</Text>
      </TouchableOpacity>
    </View>


    
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

  TextInput: {
    marginLeft: 10,
    marginTop: 10,
    fontSize: 13,
}, 

 inputView: {
   backgroundColor: '#2f4f4f',
   width: 280,
   height: 50,
   marginBottom: 20,
   borderRadius: 30,
   alignItems: 'center',
   paddingLeft: 20,
   fontSize: 14,
}, 

  loginBtn: {
    backgroundColor: '#ffd700',
    width: 200,
    height: 50,
    borderRadius: 30,
}, 

  loginText: {
    fontSize: 14,
    paddingLeft: 77,
    paddingTop: 13,
    color: '#fff',
    fontWeight: 'bold'
  }, 

  white: {
    color: '#fff',
    margin: 20,
    fontWeight: 'bold',
    fontSize: 17
  },

  googleBtn: {
    backgroundColor: '#cd5c5c',
    width: 150,
    height: 50,
    borderRadius: 5
  }, 

  googleText: {
    color: '#fff', 
    marginLeft: 50,
    marginTop: 15,
    fontSize: 13
  }

});
