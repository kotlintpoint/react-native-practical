/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
 
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AllUserScreen from './screens/AllUserScreen';
import DeleteUserScreen from './screens/DeleteUserScreen';
import UpdateUserScreen from './screens/UpdateUserScreen';
import NewUserScreen from './screens/NewUserScreen';
import { combineReducers,createStore } from 'redux';
import userReducer from './store/reducers/user'
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const rootReducer=combineReducers({
    users : userReducer
  })

  const store=createStore(rootReducer)

  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}
         />
        <Stack.Screen name="NewUser" component={NewUserScreen}
        options={{ title: 'Create User' }} />
        <Stack.Screen name="UpdateUser" component={UpdateUserScreen}
        options={{ title: 'Update User' }} />
        <Stack.Screen name="DeleteUser" component={DeleteUserScreen} 
        options={{ title: 'Delete User' }}/>
        <Stack.Screen name="AllUser" component={AllUserScreen}
        options={{ title: 'All Users' }} />
      </Stack.Navigator>
    </NavigationContainer>  
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
