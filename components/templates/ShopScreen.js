import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ShopScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Shop Screen</Text>
            <Image source={{uri: 'https://bearswire.usatoday.com/wp-content/uploads/sites/63/2019/01/usatsi_11955506.jpg?w=1000&h=600&crop=1'}} />
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

export default ShopScreen;
