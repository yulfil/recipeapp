import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/home';
import Shop from './screens/shop';
import MyTabs from './screens/tabs';
const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
  );
}
