import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from "./TaskCardStyles";

type ActivityCardProps = {
    title: string;
    level: string;
    duration: string;
    image: any;
    progress?: number;
    onPress?: () => void;
};

export default function ActivityCard({ title, level, duration, image, progress = 0, onPress }: ActivityCardProps) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image source={image} style={styles.image} />
            <View style={styles.overlay}>
                <Text style={styles.title}>{title}</Text>

                {/* Informações de nível e duração */}
                <View style={styles.infoContainer}>
                    <View style={styles.infoItem}>
                        <Icon name="rocket-outline" size={16} color="#fff" style={styles.icon} />
                        <Text style={styles.infoText}>{level}</Text>
                    </View>

                    <View style={styles.infoItem}>
                        <Icon name="time-outline" size={16} color="#fff" style={styles.icon} />
                        <Text style={styles.infoText}>{duration}</Text>
                    </View>
                </View>

                {/* Barra de progresso */}
                <View style={styles.progressBackground}>
                    <View style={[styles.progressFill, { width: `${progress}%` }]} />
                </View>
            </View>
        </TouchableOpacity>
    );
}