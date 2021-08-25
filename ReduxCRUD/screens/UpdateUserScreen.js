import React, {useState} from 'react'
import { View, Text, Alert } from 'react-native'
import MyButton from '../components/MyButton'
import MyTextInput from '../components/MyTextInput'

const UpdateUserScreen = () => {

    const [userId, setUserId] = useState('')
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

    const _handlerUserId = (text) => {
        setUserId(text)
    }

    const _handleSearch=()=>{
       
    }

    const _handleSubmit=()=>{
        console.log(JSON.stringify(user)+' handleSubmit')
        
    }

    return (
        <View>
            <MyTextInput 
                onChangeHandler={_handlerUserId}
                placeHolder="Enter ID"
                value={userId} ></MyTextInput>

        <MyButton title="Search"
              onPress={_handleSearch}></MyButton>

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

        <MyButton title="Submit"
              onPress={_handleSubmit}></MyButton>
        </View>
    )
}

export default UpdateUserScreen
