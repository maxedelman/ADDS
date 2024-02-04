// AppNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './components/templates/HomeScreen.js';
import ExploreScreen from './components/templates/ExploreScreen.js';
import ProfileScreen from './components/templates/ProfileScreen.js';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
    initialRouteName="Home"  // Specify the initial screen
    screenOptions={{
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
      headerShown: false,
      style: {
        backgroundColor: 'white',
      },
    }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;