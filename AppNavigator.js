// AppNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './components/templates/EarnScreen.js';
import WalletScreen from './components/templates/WalletScreen.js';
import ShopScreen from './components/templates/ShopScreen.js';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
    initialRouteName="Earn"  // Specify the initial screen
    screenOptions={{
      activeTintColor: 'blue',
      inactiveTintColor: 'gray',
      headerShown: false,
      style: {
        backgroundColor: 'white',
      },
    }}
    >
      <Tab.Screen name="Earn" component={HomeScreen} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Shop" component={ShopScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;