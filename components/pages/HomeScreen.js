import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import styles from '../../utils/styles';

const HomeScreen = () => {
    return (
        <View style={styles.screenContainer}>
            <Text style={{color: '#fff'}}>The start of ADD$</Text>
            <Image
                style={{width: '100%', height: '50%'}}
                source={{uri:'https://media.newyorker.com/photos/5cd98b4792eb652e91bb6e37/4:3/w_2519,h_1889,c_limit/Cunningham-Kawhi.jpg'}}
            />
            <StatusBar style="auto" />
        </View>
    );
};


export default HomeScreen;