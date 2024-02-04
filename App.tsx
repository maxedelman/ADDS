import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';

export default function App() {
  return (
    
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

