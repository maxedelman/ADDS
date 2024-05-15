import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import styles from '../../utils/styles';
import AppOption from '../organisms/AppOption';
import AppSelection from '../pages/AppSelection';

const EarnScreen = () => {
    return (
        <View style={styles.screenContainer}>
            <AppSelection />
        </View>
    );
};


export default EarnScreen;