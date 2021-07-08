import React, { Component } from 'react'
import { Text, View } from 'react-native'

class PersonClassComp extends Component {

    render() {
        return (
            <View>
                <Text>First Name : {this.props.firstName}</Text>
                <Text>Last Name : {this.props.lastName}</Text>
                <Text>Email : {this.props.otherDetails.email}</Text>
                <Text>Email : {this.props.otherDetails.mobile}</Text>
                <Text>===============================</Text>
            </View>
        )
    }
}

export default PersonClassComp
