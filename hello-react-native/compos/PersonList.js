import React, {useState} from 'react'
import { View, Text, TextInput, Button } from 'react-native'

const PersonList = () => {

    const [person, setPerson]=useState({
        firstName:'',
        lastName:'',
        email:''
    })

    const [persons, setPersons]=useState([])

    const changeHandler=(name)=>{
        return (value)=>{
            setPerson({...person, [name]:value})
        }
    }

    const clickHandler=()=>{
        setPersons([...persons, person])
    }
    return (
        <View>
            <Text>-----------------------</Text>
            <TextInput
                placeholder="Enter First Name!!!"
                style={{height:40, borderColor:"black", borderWidth:1}}
                onChangeText={changeHandler('firstName')}
                
                value={person.firstName}></TextInput>
            <TextInput
                placeholder="Enter Last Name!!!"
                style={{height:40, borderColor:"black", borderWidth:1}}
                onChangeText={changeHandler('lastName')}
                
                value={person.lastName}></TextInput>    
            <TextInput
                placeholder="Enter Email!!!"
                style={{height:40, borderColor:"black", borderWidth:1}}
                onChangeText={changeHandler('email')}
                
                value={person.email}></TextInput>

            <Button title="Submit" onPress={clickHandler}></Button>
            <Text>{JSON.stringify(person)}</Text>
            <Text>{JSON.stringify(persons)}</Text>
        </View>
    )
}

export default PersonList
