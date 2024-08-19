import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import axios from 'axios';


export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin= async ()=>{
    console.log("d")
      try{
          const response= await axios.post("http://10.0.2.2:5000/api/auth/login",{
            email:email,
            password:password,
          })
          console.log(response.data)
          if(response.data.success===true){
            const {name,token}= response.data;
            
            navigation.navigate('Home',{
              name:name
            });
          }
          else{
            Alert.alert(
              "",`${response.data.message}`,[{ text: "OK", onPress: () => {navigation.navigate('Login')} }])
          }
      }
      catch(e){
          console.error(e.message)
      }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giriş Yap</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Şifre"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Giriş Yap" style={{marginBottom:30}} onPress={handleLogin} />
      <Button title="Kayıt olmadıysanız kayıt olmak için tıklayın" onPress={() => navigation.navigate('Register')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 40,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
