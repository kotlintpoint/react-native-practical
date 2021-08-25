import React from 'react'
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import MealItem from '../components/MealItem';


const CategoryMealsScreen = ({ route, navigation }) => {
    const { categoryId } = route.params;

    const MEALS = useSelector(state => state.meals.meals)

    const mealList = MEALS.filter(theMeal => {
        return theMeal.categoryIds.findIndex(cid => cid===categoryId) >= 0        
    })

    const handleMealTouch=(selectedMeal)=>{
        //console.log(selectedMeal)
        navigation.navigate('MealDetails',{
            selectedMeal
        })
    }

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={()=>handleMealTouch(item)}>
            <MealItem title={item.title}
            imageUrl={item.imageUrl}
            duration={item.duration}
            affordability={item.affordability}
            complexity={item.complexity} />
        </TouchableOpacity>
      );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
            data={mealList}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            
          />
        </SafeAreaView>
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
      height:120,
      width:125
    },
    title: {
      fontSize: 18,
    },
  });

export default CategoryMealsScreen
