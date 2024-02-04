import React from 'react';
import { View } from 'react-native';
import CompanyDescription from '../molecules/CompanyDescription';
import PlayButton from '../molecules/PlayButton';
import styles from '../../utils/styles';
import OptionText from '../atoms/OptionText';

const AdOption = ({ icon, name, length, money }) => {
    return (
      <View style={styles.optionContainer}>
        <View style={{ justifyContent: 'flex-end' }}>
            <CompanyDescription name={name} icon={icon} />
        </View>
        <View style={{ justifyContent: 'flex-end', flexDirection: 'row' }}>
          {/* Video Length */}
          <OptionText text={length} style={styles.descriptionText}/> 
          {/* Play Button */}
          <PlayButton style={styles.descriptionText} money={money}/>
        </View>
      </View>
    );
  };
  

export default AdOption;
