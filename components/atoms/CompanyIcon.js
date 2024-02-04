import React from 'react';
import { Image } from 'react-native';
import styles from '../../utils/styles';

const CompanyIcon = ({ icon }) => {
    return (
        <Image
            source={icon}
            style={styles.companyIcon}
        />
    );
};

export default CompanyIcon;
