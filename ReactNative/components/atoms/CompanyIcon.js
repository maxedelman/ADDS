import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import styles from '../../utils/styles';

const CompanyIcon = ({ icon }) => {
    return (
        <TouchableOpacity>
            <Image source={{uri: icon}} style={styles.companyIcon} />
        </TouchableOpacity>
    );
};

export default CompanyIcon;
