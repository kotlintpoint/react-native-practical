import React from 'react'
import { View, Text, Button } from 'react-native'

const FeedScreen = ({navigation}) => {
    return (
        <View  style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop:100 }}>
            <Text>Feed Screen</Text>
            <Button title="Home"
            onPress={()=>navigation.push('Home')}></Button>
        </View>
    )
}

export default FeedScreen
