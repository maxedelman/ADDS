import React from 'react';
import { View } from 'react-native';
import CompanyIcon from '../atoms/CompanyIcon';
import styles from '../../utils/styles';
import OptionText from '../atoms/OptionText';

const CompanyDescription = ({ icon, name }) => {
    return (
        <View style={styles.companyContainer}>
            <CompanyIcon icon={icon} />
            <View style={styles.companyTextContainer}>
                <OptionText text={name} style={styles.companyText} />
            </View>
        </View>
    );
};

export default CompanyDescription;
