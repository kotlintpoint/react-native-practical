import React from 'react'
import { View, Text, StyleSheet, Image,ScrollView, Button  } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import DefaultText from '../components/DefaultText';
import { toggleFavorite } from '../store/actions/meal';


const ListItem = props => {
    return (
      <View style={styles.listItem}>
        <DefaultText>{props.children}</DefaultText>
      </View>
    );
  };

const MealDetailsScreen = ({route}) => {

    const { selectedMeal } = route.params;
    const dispatch=useDispatch()
    
    const favoriteMeals=useSelector(state=>state.meals.favoriteMeals)
    //console.log('fav meals',favoriteMeals)
    //console.log('selectedmeal : ',selectedMeal.id)
    

    const index=favoriteMeals.findIndex(meal=> meal.id===selectedMeal.id)
    //const index=-1
    console.log('index',index)

    const text= index>=0 ? "Remove Fav" : "Add Fav"

  const toggleFav=()=>{
    // dispatch(action)  call reach to reducer
    dispatch(toggleFavorite(selectedMeal.id))
  }
    return (
       
        <ScrollView>
          <Button onPress={toggleFav}
          title={text}></Button>
        <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
        <View style={styles.details}>
          <DefaultText>{selectedMeal.duration}m</DefaultText>
          <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
          <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
        </View>
        <Text style={styles.title}>Ingredients</Text>
        {selectedMeal.ingredients.map(ingredient => (
          <ListItem key={ingredient}>{ingredient}</ListItem>
        ))}
        <Text style={styles.title}>Steps</Text>
        {selectedMeal.steps.map(step => (
          <ListItem key={step}>{step}</ListItem>
        ))}
      </ScrollView>
    )
}


const styles = StyleSheet.create({
    image: {
      width: '100%',
      height: 200
    },
    details: {
      flexDirection: 'row',
      padding: 15,
      justifyContent: 'space-around'
    },
    title: {
      fontFamily: 'open-sans-bold',
      fontSize: 22,
      textAlign: 'center'
    },
    listItem: {
      marginVertical: 10,
      marginHorizontal: 20,
      borderColor: '#ccc',
      borderWidth: 1,
      padding: 10
    }
  });
export default MealDetailsScreen
