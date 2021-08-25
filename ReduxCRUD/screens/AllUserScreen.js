import React, {useEffect, useState} from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import {useSelector} from 'react-redux'



const Item = (props) => {
    //console.log(props.title)
        const {id, name}=props.title
      return (<View style={styles.item}>
                <Text style={styles.title}>{id} - {name}</Text>
            </View>)
}
    
  

const AllUserScreen = () => {

    //const [userList, setUserList]=useState([])
    const userList = useSelector(state => state.users.users)
   // setUserList(users)
    useEffect(()=>{
        // no dependency means code execute only when component render first time
      
    }, [])

    const renderItem = ({ item }) => {
        //console.log(item)
        return <Item title={item} />
    }
        

    return (
        <View>
            <Text>All User</Text>
            <FlatList
                data={userList}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });

export default AllUserScreen
