import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from '../../utils/styles';
import OptionText from '../atoms/OptionText';

const PlayButton = ({style, money}) => {
    return (
        <View style={styles.optionElementContainer}>
            <TouchableOpacity style={styles.playButton}>
                <View style={{flexDirection:'row'}}>
                    <OptionText style={style} text="Play for" />
                    <OptionText style={styles.moneyText} text={money} />
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default PlayButton;