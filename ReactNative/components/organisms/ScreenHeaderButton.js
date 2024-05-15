import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import styles from '../../utils/styles';

const ScreenHeaderButton = ({text}) => {
    return (
        <View style={styles.header}>
            <TouchableOpacity>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerButtonText}>{text}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        height: 60,
        backgroundColor: '#f2f2f2',
    },
    leftText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    middleText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    rightText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    headerIcon: {
        width: '50%',
        height: '50%',
        resizeMode: 'contain',
    },
});

export default ScreenHeaderButton;
