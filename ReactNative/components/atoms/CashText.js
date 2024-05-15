import React from 'react';
import { View, Text } from 'react-native';
import styles from '../../utils/styles';

const CashText = ({ emoji, cash }) => {

    return (
        <View style={styles.cashText}>
            <Text numberOfLines={1} style={styles.moneyText}> {emoji} ${cash.toFixed(2)} </Text>
        </View>
    );
};

export default CashText;