import React from 'react'
import { View, Text, Button } from 'react-native'

const DetailsScreen = ({route, navigation}) => {
    
    const {itemId, itemName}= route.params
    
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop:100 }}>
            <Text>Details Screen</Text>
            <Text>{itemId} --- {itemName}</Text>
            <Button
                title="Go to Details... again"
                onPress={() => navigation.push('Details')}
            />
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
            <Button
                title="Go back to first screen in stack"
                onPress={() => navigation.popToTop()}
            />
        </View>
    )
}

export default DetailsScreen
