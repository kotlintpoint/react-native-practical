import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PersonClassComp from './compos/PersonClassComp';
import PersonFuncComp from './compos/PersonFuncComp';
import CountFuncComp from './compos/CountFuncComp';
import CountClassComp from './compos/CountClassComp';


export default function App() {

  const username="Tops"
  const userText=<Text>Welcome, {username}</Text>
  const otherDetails={email : 'tops@gmail.com', mobile:'123456789'}

  return (
    <View style={styles.container}>
      {/* {userText} */}
      <PersonFuncComp firstName="Tops" lastName="Technologies"
            otherDetails={otherDetails}></PersonFuncComp>

      <PersonFuncComp firstName="Mitesh" lastName="Patel"
        otherDetails={{email:"mitesh@gmail.com", mobile:"7898654000"}}></PersonFuncComp>

      <PersonFuncComp firstName="Pritesh" lastName="Patel"
        otherDetails={{email:"pritesh@gmail.com", mobile:"789456200"}}></PersonFuncComp>

      <PersonClassComp firstName="Pritesh" lastName="Patel"
        otherDetails={{email:"pritesh@gmail.com", mobile:"789456200"}}></PersonClassComp>

        <CountFuncComp></CountFuncComp>
        <CountClassComp></CountClassComp>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
