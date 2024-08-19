import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button,BackHandler,Alert } from 'react-native';


export default function HomeScreen({ navigation,route }) {
  const {name} = route.params
  useEffect(() => {
    const backAction = () => {
      Alert.alert(
        "Çıkmak üzeresiniz",
        "Giriş ekranına dönmek istiyor musunuz?",
        [
          {
            text: "Hayır",
            onPress: () => null,
            style: "cancel"
          },
          { 
            text: "Evet", 
            onPress: () => navigation.navigate('Login') 
          }
        ]
      );
      return true; 
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove(); 
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Hoşgeldiniz, {name}!</Text>
      <Button title="Listeyi görmek için tıklayınız" onPress={()=>{navigation.navigate('Posts')}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
});
