import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  TextInput, 
  TouchableOpacity } from 'react-native';

export default function Register() {
  
  return (
    <View style={styles.container}>
      <Image 
        source={require("./src/assets/Buopso-News.png")}
        style={{width: 300, height: 190, marginTop: -150}}/>
     
      <View>
      <TextInput
        style={styles.inputView}
        placeholder="Name" 
        placeholderTextColor="#a9a9a9"
        onChangeText={(name) => setName(name)}
      /> 
    </View>

    <View>
      <TextInput
        style={styles.inputView}
        placeholder="Last Name"
        placeholderTextColor="#a9a9a9"
        secureTextEntry={true}
        onChangeText={(lastName) => setLastName(lastName)}
        />
    </View>

    <View>
      <TextInput
        style={styles.inputView}
        placeholder="email@address.com"
        placeholderTextColor="#a9a9a9"
        secureTextEntry={true}
        onChangeText={(email) => setEmail(email)}
        />
    </View>

    <View>
      <TextInput
        style={styles.inputView}
        placeholder="Type Password"
        placeholderTextColor="#a9a9a9"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
        />
    </View>

    <View>
      <TextInput
        style={styles.inputView}
        placeholder="Re-Type Password"
        placeholderTextColor="#a9a9a9"
        secureTextEntry={true}
        onChangeText={(reTypePassword) => seReTypePassword(reTypePassword)}
        />
    </View>

    <TouchableOpacity style={styles.signupBtn}>
      <Text style={styles.signupText}>SIGN UP</Text>
    </TouchableOpacity>

    <Text style={styles.white}>
      Already have an account?
    </Text>

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

  signupBtn: {
    backgroundColor: '#ffd700',
    width: 200,
    height: 50,
    borderRadius: 30,
}, 

  signupText: {
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

});
