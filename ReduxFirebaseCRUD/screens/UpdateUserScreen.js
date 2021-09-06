import React, {useState, useEffect} from 'react'
import { View, Text, Alert } from 'react-native'
import MyButton from '../components/MyButton'
import MyTextInput from '../components/MyTextInput'
import { updateUser } from '../store/actions/user'
import { useDispatch } from 'react-redux'

const UpdateUserScreen = ({route, navigation}) => {

    const { editUser } = route.params;
    const [userId, setUserId] = useState('')
    const [user, setUser]=useState({
        name : '',
        email : '',
        phone : ''
    })

    useEffect(() => {
        setUser(editUser)
    }, [])

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
        dispatch(updateUser(user))
    }

    return (
        <View>
            <MyTextInput 
                placeHolder="Enter ID"
                value={user.id} ></MyTextInput>


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
