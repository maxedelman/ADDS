// Import React and necessary components from React Native
import React from 'react';
import { View, FlatList, StyleSheet, Dimensions } from 'react-native';
import styles from '../../utils/styles';
import AppOption from '../organisms/AppOption';
import appData from '../../utils/appData';

const AppSelection = () => {
  const screenWidth = Dimensions.get('window').width;


  const renderItem = ({ item }) => (
    <View style={[styles.itemContainer, { width: screenWidth / 3}]}>
      <AppOption
        icon={item.icon}
        name={item.name}
        watchCash={item.watchCash}
        downloadCash={item.downloadCash}
      />
    </View>
  );

  return (
    <View style={{flex: 1, width: screenWidth}}>
        <FlatList
        data={appData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
        contentContainerStyle={styles.appSelectionContainer}
        />
    </View>
  );
}; 

export default AppSelection;
