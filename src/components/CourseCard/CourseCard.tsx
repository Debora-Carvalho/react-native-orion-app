import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from "./CourseCardStyles";

type CardProps = {
    title: string;
    mentor: string;
    duration: string;
    image: any;
    progress?: number;
    onPress?: () => void;
};

export default function CourseCard({ title, mentor, duration, image, progress = 0 }: CardProps) {
    return (
        <TouchableOpacity style={styles.card}>
            <Image source={image} style={styles.image} />
            <View style={styles.overlay}>
                <Text style={styles.title}>{title}</Text>

                <View style={styles.infoContainer}>
                    <View style={styles.infoItem}>
                        <Icon name="person-circle-outline" size={16} color="#fff" style={styles.icon} />
                        <Text style={styles.infoText}>{mentor}</Text>
                    </View>

                    <View style={styles.infoItem}>
                        <Icon name="time-outline" size={16} color="#fff" style={styles.icon} />
                        <Text style={styles.infoText}>{duration}</Text>
                    </View>
                </View>

                <View style={styles.progressBackground}>
                    <View style={[styles.progressFill, { width: `${progress}%` }]} />
                </View>
            </View>
        </TouchableOpacity>
    );
};