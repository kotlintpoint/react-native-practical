import React, {useState} from 'react'
import { View, Text, FlatList,StyleSheet, Platform, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        ...Platform.select({
            ios: {
              backgroundColor: 'red'
            },
            android: {
              backgroundColor: 'green'
            },
            default: {
              // other platforms, web for example
              backgroundColor: 'blue'
            }
          })
    },
    itemContainer: {
     borderColor:'black',
     borderWidth:1 
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
  });

const Item=({item, myPress, backgroundColor, textColor})=>{
  return <TouchableOpacity onPress={myPress}
          style={{backgroundColor}}>
  <View key={item.id} style={styles.itemContainer}> 
      <Text style={styles.item}>{item.first_name}</Text>
      <Text style={styles.item}>{item.last_name}</Text>
  </View>
</TouchableOpacity>
}

const FlatListOne = () => {
    const data=[
        {id:'1', first_name : 'Sachin', last_name:'XYZ'},
        {id:'2', first_name : 'Mitesh', last_name:'XYZ'},
        {id:'3', first_name : 'Pritesh', last_name:'XYZ'},
        {id:'4', first_name : 'Raj', last_name:'XYZ'},
        {id:'5', first_name : 'Kiran', last_name:'XYZ'}
    ]
    const [selected, setSelected]=useState(null)

    const myRenderItem=({item})=>{
      const backgroundColor = item.id === selected ? "#6e3b6e" : "#f9c2ff";
      const color = item.id === selected ? 'white' : 'black';


        return <Item item={item}
                      myPress={()=>{setSelected(item.id)}}
                      backgroundColor={backgroundColor}
                      textColor={color}></Item>
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={myRenderItem}
            ></FlatList>
        </View>
    )
}

export default FlatListOne
