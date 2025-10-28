import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './HomeStyles';
import Header from '../../components/Header/Header';

export default function HomeScreen () {
    return (
        <View style={styles.container}>
            <Header />
            <Text style={styles.text}>Bem-vindo ao Órion 🌌</Text>
        </View>
    );
}