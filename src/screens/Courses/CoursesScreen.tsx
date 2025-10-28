import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from "./CoursesStyles"
import Header from "../../components/Header/Header";
import CourseCard from '../../components/CourseCard/CourseCard';

const cursosData = [
    { id: 1, title: 'Astronomia Básica', mentor: 'Fábio Guimarães', duration: '250h', image: require('../../assets/img/curso1.jpg'), status: 'iniciado', progress: 60 },
    { id: 2, title: 'Exploração Espacial', mentor: 'Ana Silva', duration: '180h', image: require('../../assets/img/curso2.jpg'), status: 'concluido', progress: 100 },
    { id: 3, title: 'Cosmologia Avançada', mentor: 'Rafael Costa', duration: '320h', image: require('../../assets/img/curso3.jpg'), status: 'iniciado', progress: 30 },
];

export default function CursosScreen() {
    const [filter, setFilter] = useState<'todos' | 'iniciado' | 'concluido'>('todos');

    const filteredCourses = cursosData.filter(curso => filter === 'todos' ? true : curso.status === filter);

    return (
        <View style={styles.container}>
            <Header />
            {/* Título da tela */}
            <View style={styles.header}>
                <Icon name="book-outline" size={28} color="#6C63FF" />
                <Text style={styles.title}>Cursos</Text>
            </View>

            {/* Tabs de filtro */}
            <View style={styles.tabsContainer}>
                {['todos', 'iniciado', 'concluido'].map(tab => (
                    <TouchableOpacity
                        key={tab}
                        style={[styles.tabButton, filter === tab && styles.tabActive]}
                        onPress={() => setFilter(tab as any)}
                    >
                        <Text style={[styles.tabText, filter === tab && styles.tabTextActive]}>
                            {tab === 'todos' ? 'Todos' : tab === 'iniciado' ? 'Iniciados' : 'Concluídos'}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Lista de cursos */}
            <FlatList
                data={filteredCourses}
                keyExtractor={item => item.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20 }}
                renderItem={({ item }) => (
                    <View style={{ marginBottom: 20 }}>
                        <CourseCard
                        title={item.title}
                        mentor={item.mentor}
                        duration={item.duration}
                        image={item.image}
                        progress={item.progress}
                        />
                    </View>
                )}
            />
        </View>
    );
}
