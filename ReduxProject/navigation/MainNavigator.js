import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailsScreen from '../screens/MealDetailsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

const MainNavigator = () => {

    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Categories">
                <Stack.Screen name="Categories" component={CategoriesScreen} />
                <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen} />
                <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator
