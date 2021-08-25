import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const MyTextInput = (props) => {
    return (
        <TextInput
        style={styles.input}
        onChangeText={props.onChangeHandler}
        value={props.value}
        placeholder={props.placeHolder}
        
      />
    )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
  

export default MyTextInput
