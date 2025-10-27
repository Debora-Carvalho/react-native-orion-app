import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './HomeStyles';

export default function HomeScreen () {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Bem-vindo ao Órion 🌌</Text>
        </View>
    );
}