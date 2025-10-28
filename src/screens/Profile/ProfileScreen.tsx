import { View, Text, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Header from '../../components/Header/Header';
import { styles } from './ProfileStyles';

export default function ProfileScreen() {
    // Dados fictícios do usuário
    const user = {
        name: 'Ruth Carvalho',
        age: 28,
        location: 'São Paulo, Brasil',
        language: 'Português - BR',
        email: 'ruth.carvalho@email.com',
        instagram: '@ruth.carvalho',
        bio: 'Apaixonada por astronomia e exploração espacial. Sempre em busca de aprender mais sobre o universo e compartilhar conhecimento.',
        profileImage: require('../../assets/img/avatar-profile.jpg'),
        metrics: {
            coursesCompleted: 5,
            tasksCompleted: 12,
            xp: 2350,
            streak: 14,
        },
    };

    return (
        <View style={styles.container} >
            <Header />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Icon name="person-outline" size={28} color="#6C63FF" />
                    <Text style={styles.title}>Meu Perfil</Text>
                </View>

                <View style={[styles.card, styles.profileCard]}>
                    <Image source={user.profileImage} style={styles.profileImage} />
                    <Text style={styles.profileName}>{user.name}</Text>
                </View>

                <View style={styles.metricsRow}>
                    <View style={[styles.card, styles.metricCard, { backgroundColor: '#6C63FF' }]}>
                        <Icon name="book-outline" size={28} color="#fff" />
                        <Text style={styles.metricNumber}>{user.metrics.coursesCompleted}</Text>
                        <Text style={styles.metricLabel}>Cursos concluídos</Text>
                    </View>
                    <View style={[styles.card, styles.metricCard, { backgroundColor: '#FF6C63' }]}>
                        <Icon name="rocket-outline" size={28} color="#fff" />
                        <Text style={styles.metricNumber}>{user.metrics.tasksCompleted}</Text>
                        <Text style={styles.metricLabel}>Atividades concluídas</Text>
                    </View>
                </View>

                <View style={styles.metricsRow}>
                    <View style={[styles.card, styles.metricCard, { backgroundColor: '#46b94cff' }]}>
                        <Icon name="star-outline" size={28} color="#fff" />
                        <Text style={styles.metricNumber}>{user.metrics.xp}</Text>
                        <Text style={styles.metricLabel}>Pontuação (XP)</Text>
                    </View>
                    <View style={[styles.card, styles.metricCard, { backgroundColor: '#FFC863' }]}>
                        <Icon name="flame-outline" size={28} color="#fff" />
                        <Text style={styles.metricNumber}>{user.metrics.streak}</Text>
                        <Text style={styles.metricLabel}>Sequência de dias</Text>
                    </View>
                </View>

                <View style={[styles.card, styles.bioCard]}>
                    <Text style={styles.bioText}>{user.bio}</Text>
                </View>

                <View style={styles.infoCard}>
                    <Icon name="calendar-outline" size={20} color="#6C63FF" />
                    <Text style={styles.infoText}>{user.age} anos</Text>
                </View>
                <View style={styles.infoCard}>
                    <Icon name="location-outline" size={20} color="#6C63FF" />
                    <Text style={styles.infoText}>{user.location}</Text>
                </View>
                <View style={styles.infoCard}>
                    <Icon name="chatbubble-outline" size={20} color="#6C63FF" />
                    <Text style={styles.infoText}>{user.language}</Text>
                </View>
                <View style={styles.infoCard}>
                    <Icon name="mail-outline" size={20} color="#6C63FF" />
                    <Text style={styles.infoText}>{user.email}</Text>
                </View>
                <View style={styles.infoCard}>
                    <Icon name="logo-instagram" size={20} color="#6C63FF" />
                    <Text style={styles.infoText}>{user.instagram}</Text>
                </View>
            </ScrollView>
        </View>
    );
};
