import React, {useEffect, useState} from 'react'
import { 
  View, 
  Text, 
  FlatList, 
  StyleSheet,
  TouchableOpacity, 
  Button
} from 'react-native'
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import { deleteUser, fetchUsers } from '../store/actions/user'


const Item = (props) => {
    //console.log(props.title)
        const {id, name,email, phone}=props.title
      return (<View style={styles.item}>
                <Text style={styles.title}>{name}</Text>
                <Text>{email}</Text>
                <Text>{phone}</Text>
                <Button title="Delete"
                onPress={()=>props.onDeleteUser(props.title)}></Button>
            </View>)
}
    
  

const AllUserScreen = ({navigation}) => {

  const dispatch=useDispatch()
    //const [userList, setUserList]=useState([])
    const userList = useSelector(state => state.users.users)
   
    // setUserList(users)
    useEffect(()=>{
        // no dependency means code execute only when component render first time
        dispatch(fetchUsers())
    }, [])

    const onPressUser=(user)=>{
      console.log("On Press User",JSON.stringify(user))  
      navigation.navigate("UpdateUser",{
        editUser : user
      })
    }
    
    const onDeleteUser=(user)=>{
      dispatch(deleteUser(user.id))
    }

    const renderItem = ({ item }) => {
        //console.log(item)
        return  <TouchableOpacity onPress={()=>onPressUser(item)} > 
        <Item title={item} 
        onDeleteUser={onDeleteUser}/>
      
      </TouchableOpacity>
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
