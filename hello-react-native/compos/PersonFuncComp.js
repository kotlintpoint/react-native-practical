import React from 'react'
import { View, Text } from 'react-native'

const PersonFuncComp = (props) => {
    //props.firstName="Test"
    return (
        <View>
            <Text>First Name : {props.firstName}</Text>
            <Text>Last Name : {props.lastName}</Text>
            <Text>Email : {props.otherDetails.email}</Text>
            <Text>Email : {props.otherDetails.mobile}</Text>
            <Text>===============================</Text>
        </View>
    )
}

export default PersonFuncComp
