import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import CountClassScreen from './screens/CountClassScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>      
        <Stack.Navigator initialRouteName="Count">
          <Stack.Screen name="Home" component={HomeScreen}
                options={{ title: 'Overview' }} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Count" component={CountClassScreen} />
        </Stack.Navigator>      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:100
  },
});
