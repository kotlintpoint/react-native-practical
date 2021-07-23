import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'

class CountClassScreen extends Component {
    state={
        count:10,
        currentTime:new Date()
    }
    myInterval=()=>{
        
        console.log('Interval...')
        this.setState({
            ...this.state,
            currentTime:new Date()
        })
    
    }

    componentDidMount(){
        console.log('Component Did Mount')
        setInterval(this.myInterval, 1000)
    }

    componentDidUpdate(){
        console.log('Component Did Update')
      
    }

    componentWillUnmount(){
        console.log('Component Will Unmount')
    }
   
    render() {
        return (
            <View>
                <Text> Count : {this.state.count} </Text>
                <Text>{this.state.currentTime.toLocaleTimeString()}</Text>
                <Button onPress={()=>this.setState({count : this.state.count+1})}
                title="Increment"></Button>
            </View>
        )
    }
}

export default CountClassScreen
