import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import CountClassScreen from './screens/CountClassScreen';
import CountContainer from './screens/CountContainer';
import FeedScreen from './screens/FeedScreen';
import MessagesScreen from './screens/MessagesScreen';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>      
        <Stack.Navigator initialRouteName="Tab">
          <Stack.Screen name="Tab" component={TabScreen} />
           <Stack.Screen name="Home" component={HomeScreen}
                options={{ title: 'Overview' }} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Count" component={CountContainer} /> 
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
