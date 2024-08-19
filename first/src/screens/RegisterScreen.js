import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,Alert } from 'react-native';
import axios from 'axios';

export default function RegisterScreen({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const passwordMatched=()=>{
      if(password===confirmPassword){
        return true;
      }
      return false
  }
  const handleRegister= async ()=>{
    console.log("a")
    try{ 
        if(passwordMatched()){
          const response= await axios.post("http://10.0.2.2:5000/api/auth/register",{
            name:firstName,
            lastname:lastName,
            email:email,
            password:password
          })
          console.log(response.data)
            if (response.status === 200) {
              Alert.alert(
                "",
                `${response.data.message}`,
                [{ text: "OK", onPress: () => navigation.navigate('Login') }]
              );
            } else {
              Alert.alert("Hata",`${response.data.message}`);
            }
        }
        else{
          console.log("b")
          Alert.alert("Şifreler farklı!")
        }
        
    }
    catch(e){
        console.error(e.message)
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      
      <Button title="Register" onPress={handleRegister} />
      <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
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
    fontSize: 32,
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
