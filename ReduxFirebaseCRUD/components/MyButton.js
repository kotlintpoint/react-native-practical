import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const MyButton = ({title, onPress}) => {
    return (
        <TouchableOpacity
          style={styles.button}
          onPress={onPress}
        >
          <Text>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 10
    },
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10,
      margin:10
    },
    countContainer: {
      alignItems: "center",
      padding: 10
    }
  });

export default MyButton
