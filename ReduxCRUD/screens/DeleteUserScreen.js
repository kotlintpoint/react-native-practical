import React, {useState} from 'react'
import { View, Text, Alert } from 'react-native'
import MyButton from '../components/MyButton'
import MyTextInput from '../components/MyTextInput'
import { useDispatch } from 'react-redux'
import { deleteUser } from '../store/actions/user'


const DeleteUserScreen = () => {

    const [userId, setUserId] = useState('')
    const _handlerUserId = (text) => {
        setUserId(text)
    }

    const dispatch=useDispatch()

    const _handleDelete=({navigation})=>{
        console.log(`Delete user with id ${userId}`)
        dispatch(deleteUser(parseInt(userId)))
    }

    return (
        <View>
            <MyTextInput 
                onChangeHandler={_handlerUserId}
                placeHolder="Enter ID"
                value={userId} ></MyTextInput>

        <MyButton title="Delete"
              onPress={_handleDelete}></MyButton>
        </View>
    )
}

export default DeleteUserScreen
