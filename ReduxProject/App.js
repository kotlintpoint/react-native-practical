/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {  StyleSheet } from 'react-native';
import MainNavigator from './navigation/MainNavigator';
import { combineReducers,createStore } from 'redux';
import mealsReducer from './store/reducers/meal'
import { Provider } from 'react-redux';

const rootReducer=combineReducers({
  meals : mealsReducer
})

const store=createStore(rootReducer)

const App= () =>{
 
  return (
      <Provider store={store}>
        <MainNavigator></MainNavigator>
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
