import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, Ionicons, Entypo } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './home';
import Post from './post';
import Shop from './shop';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Screens = ({ navigation, style }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route, props }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'Home') {
            return (
              <Ionicons
                name={focused ? 'md-home' : 'md-home'}
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'List') {
            return (
              <Entypo
                name={focused ? 'list' : 'list'}
                size={size}
                color={color}
              />
            );
          } else if (route.name === 'Search') {
            return (
              <Ionicons
                name={focused ? 'md-search' : 'md-search'}
                size={size}
                color={color}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: '#ff3c3c',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="List" component={Shop} />
    </Tab.Navigator>
  );
};
const Tabs = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Recipes App" component={Screens} />
      <Stack.Screen
        name="Post"
        component={Post}
        options={({ route }) => ({
          title: route.params.recipe.title,
        })}
      />
    </Stack.Navigator>
  );
};
export default Tabs;
