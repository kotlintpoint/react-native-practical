import React from 'react'
import { View, Text, StyleSheet, FlatList,  TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import CategoryItem from '../components/CategoryItem';

import { CATEGORIES } from '../data/dummy-data';



const CategoriesScreen = ({ navigation }) => {

    const DATA=CATEGORIES

    const handleCategoryTouch=(id)=>{
        console.log('Category Touch',id)
        navigation.navigate('CategoryMeals',{
            categoryId : id
        })
    }

    const renderItem = ({ item }) => (

            <CategoryItem title={item.title} color={item.color} 
            onPress={() => handleCategoryTouch(item.id)}/>
        
      );
    
      return (
        <SafeAreaView style={styles.container}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            numColumns={2}
          />
        </SafeAreaView>
      );
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
      height:120,
      width:125
    },
    title: {
      fontSize: 18,
    },
  });

export default CategoriesScreen
