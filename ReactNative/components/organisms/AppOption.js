import React from 'react';
import { View } from 'react-native';
import CompanyDescription from '../molecules/CompanyDescription';
import styles from '../../utils/styles';
import OptionText from '../atoms/OptionText';
import CashText from '../atoms/CashText';

const AppOption = ({ icon, name, watchCash, downloadCash }) => {
    const total = watchCash + downloadCash;  

    return (
      <View style={styles.appOptionContainer}>
        <CashText emoji={'💸'} cash={total} />
        <CompanyDescription name={name} icon={icon} />
        <CashText emoji={'🎥'} cash={watchCash} />
        <CashText emoji={'⬇️'} cash={downloadCash} />
      </View>
    );
  };
  

export default AppOption;
