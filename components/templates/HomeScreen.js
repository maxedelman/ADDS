import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import styles from '../../utils/styles';
import AdOption from '../organisms/AdOption';

const HomeScreen = () => {
    return (
        <View style={styles.screenContainer}>
            <AdOption icon={require('../../assets/favicon.png')} name="Google" length='15s' money='$5'/>
        </View>
    );
};


export default HomeScreen;