import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './TasksStyles';
import Header from '../../components/Header/Header';
import TaskCard from '../../components/TaskCard/TaskCard';

const tasksData = [
    { id: 1, title: 'Observação de Estrelas', level: 'Nível 1', duration: '2h', image: require('../../assets/img/curso1.jpg'), status: 'iniciado', progress: 50 },
    { id: 2, title: 'Exploração do Sistema Solar', level: 'Nível 2', duration: '3h', image: require('../../assets/img/curso2.jpg'), status: 'concluido', progress: 100 },
    { id: 3, title: 'Constelações e Mitologia', level: 'Nível 3', duration: '1h', image: require('../../assets/img/curso3.jpg'), status: 'iniciado', progress: 20 },
];

export default function TasksScreen() {
    const [filter, setFilter] = useState<'todos' | 'iniciado' | 'concluido'>('todos');

    const filteredTasks = tasksData.filter(task => filter === 'todos' ? true : task.status === filter);

    return (
        <View style={styles.container}>
            <Header />

            {/* Título da tela */}
            <View style={styles.header}>
                <Icon name="rocket-outline" size={28} color="#6C63FF" />
                <Text style={styles.title}>Atividades</Text>
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
                            {tab === 'todos' ? 'Todas' : tab === 'iniciado' ? 'Iniciadas' : 'Concluídas'}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Lista de atividades */}
            <FlatList
                data={filteredTasks}
                keyExtractor={item => item.id.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 20 }}
                renderItem={({ item }) => (
                    <View style={{ marginBottom: 20 }}>
                        <TaskCard
                            title={item.title}
                            level={item.level}
                            duration={item.duration}
                            image={item.image}
                            progress={item.progress}
                        />
                    </View>
                )}
            />
        </View>
    );
};
