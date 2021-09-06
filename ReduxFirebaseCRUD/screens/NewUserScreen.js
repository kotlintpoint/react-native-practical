import React, {useState} from 'react'
import { View, Text, TextInput, Alert  } from 'react-native'
import MyButton from '../components/MyButton'
import MyTextInput from '../components/MyTextInput'
import { useDispatch } from 'react-redux'
import { createUser } from '../store/actions/user'



const NewUserScreen = ({navigation}) => {

    const [user, setUser]=useState({
        name : '',
        email : '',
        phone : ''
    })

    const _handleMultiInput = (name) => {
        return (text) => {
            setUser({
                ...user,
                [name] : text
            })
        }
    }

    const dispatch=useDispatch()
    const _handleSubmit=()=>{
        console.log(JSON.stringify(user)+' handleSubmit')

        dispatch(createUser(user))

        //navigation.goBack()
        navigation.navigate("AllUser")
    }

    return (
        <View>
            <MyTextInput 
                onChangeHandler={_handleMultiInput('name')}
                placeHolder="Enter Name"
                value={user.name} ></MyTextInput>

            <MyTextInput 
                onChangeHandler={_handleMultiInput('email')}
                placeHolder="Enter Email"
                value={user.email} ></MyTextInput>

        <MyTextInput 
                onChangeHandler={_handleMultiInput('phone')}
                placeHolder="Enter Phone"
                value={user.phone} ></MyTextInput>

                <Text>{JSON.stringify(user)}</Text>

                <MyButton title="Submit"
              onPress={_handleSubmit}></MyButton>
        </View>
    )
}

export default NewUserScreen
