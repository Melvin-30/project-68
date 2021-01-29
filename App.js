import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import insta from './screens/in.js'
import fb from './screens/fb.js'
export default function App() {
  return (
    <AppContainer/>
  );
}
const TabNavigator=createBottomTabNavigator({
  Facebook:{screen:fb},
  Instagram:{screen:insta},
})
const AppContainer=createAppContainer(TabNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
