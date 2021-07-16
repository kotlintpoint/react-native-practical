import React, {useState} from 'react'
import { View, Text, TextInput, Button } from 'react-native'

const CityList = () => {

    const [city, setCity]=useState('')
    const [cities, setCities]=useState([])

    const changeHandler=(value)=>{
        setCity(value)
    }
    const clickHandler=()=>{
        setCities([...cities, city])
        setCity('')
    }

    return (
        <View>
            <TextInput
                placeholder="Enter City Here!!!"
                style={{height:40, borderColor:"black", borderWidth:1}}
                onChangeText={changeHandler}
                
                value={city}></TextInput>
            <Button title="Submit" onPress={clickHandler}></Button>
            <Text>{JSON.stringify(cities)}</Text>
        </View>
    )
}

export default CityList
