import React, { useEffect } from 'react'
import { View, Text, TextInput } from 'react-native'
import MyButton from '../components/MyButton'

const HomeScreen = ({navigation}) => {

    // useEffect(function, [dependencyList])
    useEffect(()=>{
        // componentDidMount => because dependency list is empty
        // code execute only when component render
        console.log('Inside use Effect')


    }, [])

    return (
        <View>
              <MyButton title="New User"
              onPress={() => navigation.navigate('NewUser')}></MyButton>
              
              <MyButton title="Update User"
              onPress={() => navigation.navigate('UpdateUser')}></MyButton>
              
              <MyButton title="Delete User"
              onPress={() => navigation.navigate('DeleteUser')}></MyButton>
              
              <MyButton title="All User"
              onPress={() => navigation.navigate('AllUser')}></MyButton>
        </View>
    )
}

export default HomeScreen
