import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Modal, ImageBackground } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

import { styles } from './HomeStyles';

import Icon from "react-native-vector-icons/Ionicons";

import Header from '../../components/Header/Header';
import CourseCard from '../../components/CourseCard/CourseCard';
import TaskCard from '../../components/TaskCard/TaskCard';

type TabParamList = {
    "Início": undefined;
    Cursos: undefined;
    Atividades: undefined;
    Perfil: undefined;
};

type NavigationProps = BottomTabNavigationProp<TabParamList, "Início">;

export default function HomeScreen() {
    const navigation = useNavigation<NavigationProps>();

    const handleExplorar = () => {
        navigation.navigate("Cursos"); 
    };

    const cursos = [
        { id: 1, title: 'Planetas do Sistema Solar', mentor: "Jéssica Andrade", duration: "78h", progress: 26, image: require('../../assets/img/curso2.jpg') },
        { id: 2, title: 'Exploração Espacial', mentor: "Lucas Rocha", duration: "180h", progress: 36, image: require('../../assets/img/curso3.jpg') },
        { id: 3, title: 'Astronomia Básica', mentor: "Fábio Guimarães", duration: "250h", progress: 41, image: require('../../assets/img/curso1.jpg') },
    ];

    const atividades = [
        { id: 1, title: 'Quiz de Constelações', level: "Nível 1", duration: "45min", progress: 78, image: require('../../assets/img/curso1.jpg') },
        { id: 2, title: 'Desafio de Planetário', level: "Nível 2", duration: "1h30min", progress: 35, image: require('../../assets/img/curso2.jpg') },
    ];

    return (
        <View style={styles.container}>
            <Header />

            <ScrollView
                style={{ flex: 1, width: '100%' }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 20 }}
            >
                {/* saudação */}
                <ImageBackground
                    source={require("../../assets/img/background-banner-home.jpg")}
                    style={styles.bannerContainer}
                    imageStyle={styles.bannerImage}
                >
                    <View style={styles.bannerContainerItems}>
                        <Text style={styles.greetingText}>Olá, Ruth!</Text>
                        <Text style={styles.subtitle}>O que você vai aprender hoje?</Text>

                        <TouchableOpacity style={styles.exploreButton} onPress={handleExplorar}>
                            <Text style={styles.buttonText}>Explorar</Text>
                            <Icon name="arrow-forward-outline" size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>

                {/* cursos em andamento */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Cursos em andamento</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {cursos.map(curso => (
                            <CourseCard
                                key={curso.id}
                                title={curso.title}
                                mentor={curso.mentor}
                                duration={curso.duration}
                                image={curso.image}
                                progress={curso.progress}
                            />
                        ))}
                    </ScrollView>
                </View>

                {/* atividades em andamento */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Atividades em andamento</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {atividades.map(task => (
                            <TaskCard
                                key={task.id}
                                title={task.title}
                                level={task.level}
                                duration={task.duration}
                                image={task.image}
                                progress={task.progress}
                            />
                        ))}
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    );
};