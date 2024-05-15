import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../utils/styles';

const OptionText = ({text, style}) => {
    return (
        <View style={styles.optionElementContainer}>
            <Text style={style}>{text}</Text>
        </View>
    );
};

export default OptionText;
