import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'
import CountClassScreen from './CountClassScreen'
import CountFuncScreen from './CountFuncScreen'

const CountContainer = () => {
    const [show, setShow]=useState(true)

    return (
        <View>
            <Text>Container</Text>
            <Button title={show ? "Hide" : "Show"}
            onPress={()=>setShow(!show)}></Button>

            {show && <View>
                <CountClassScreen></CountClassScreen>
                <CountFuncScreen></CountFuncScreen>
                </View> }
            {/* {show && <CountFuncScreen></CountFuncScreen> } */}
        </View>
    )
}

export default CountContainer
