import React, {useState, useEffect} from 'react'
import { View, Text } from 'react-native'

const CountFuncScreen = () => {
    const [date, setDate]=useState(new Date())

    useEffect(()=>{
        console.log('inside use-Effect')
        // ---- setInterval start -----
        let intervalId=setInterval(()=>{
            // component did mount because dependency list empty
            setDate(new Date())
        })
        // ---- setInterval end -----
        
        // component will unmount
        return ()=>{
            console.log('inside return function')
            clearInterval(intervalId)
        }

    }, [])

    return (
        <View>
            <Text>Current Time : {date.toLocaleTimeString()}</Text>
        </View>
    )
}

export default CountFuncScreen
