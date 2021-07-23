import React from 'react'
import { View, Text, Button } from 'react-native'

const HomeScreen = ({navigation}) => {
  
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop:100 }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
          />
          <Button
          title="Go to Details with Data"
          onPress={() => navigation.navigate('Details', {
            itemId:100,
            itemName:'Mobile'
          })}
          />
      </View>
    )
}

export default HomeScreen
