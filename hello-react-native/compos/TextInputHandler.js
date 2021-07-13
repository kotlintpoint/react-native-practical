import React, {useState} from 'react'
import { View, Text, TextInput, Button } from 'react-native'

const TextInputHandler = () => {

    const [message, setMessage]=useState('')
    const [finalMessage, setFinalMessage]=useState('')

    const clickHandler=()=>{
        setFinalMessage(message)
    }

    const changeHandler=(text)=>{
        //console.log(text)
        //setMessage(text)

        // split => returns array 
        let tokens=text.split(' ')
        // javascript array function => map
        let newTokens=tokens.map((value)=>{
            return value && '🍕'
        })
        console.log(newTokens.join(' '))
        setMessage(newTokens.join(' '))
    }

    return (
        <View>
            <TextInput
                placeholder="Enter Message Here!!!"
                style={{height:40, borderColor:"black", borderWidth:1}}
                onChangeText={changeHandler}
                defaultValue={message}
            ></TextInput>
            <Button title="Show" onPress={clickHandler}></Button>
            <Text>Your Message - {finalMessage}</Text>
            <Text>==================================</Text>
        </View>
    )
}

export default TextInputHandler
