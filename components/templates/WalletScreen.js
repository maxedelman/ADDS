import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const WalletScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Wallet Screen</Text>
            <Image source={{uri: 'https://www.rochesterfirst.com/wp-content/uploads/sites/66/2023/03/download-3143.jpg?strip=1'}} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
});

export default WalletScreen;
