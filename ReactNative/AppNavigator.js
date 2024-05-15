// AppNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import EarnScreen from './components/templates/EarnScreen.js';
import styles from './utils/styles.js';
import ScreenHeaderButton from './components/organisms/ScreenHeaderButton.js';
import colors from './utils/colors.js';
import VideoScreen from './components/templates/VideoScreen.js';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Video"  // Specify the initial screen
        screenOptions={{
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'black',
          headerTitle: "",
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerLeft: () => <ScreenHeaderButton text={"profile"} />,
          headerRight: () => <ScreenHeaderButton text={"$0.00"} />,
          headerTitle: () => <Text style={styles.headerTitle}>{"APP$"}</Text>,
          tabBarStyle: {
            backgroundColor: colors.primary,
          },
        }}
      >
        <Tab.Screen name="Earn" component={EarnScreen} />
        <Tab.Screen name="Video" component={VideoScreen} videoUri={"./assets/fuzemee.mov"} />
      </Tab.Navigator>
    </>
  );
};

export default AppNavigator;