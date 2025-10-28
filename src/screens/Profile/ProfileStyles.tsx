import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "flex-start",
        paddingVertical: 40,
        paddingHorizontal: 20,
        backgroundColor: "#0b0c2a",
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 10,
    },
    card: {
        borderRadius: 20,
        padding: 15,
        marginHorizontal: 20,
        marginBottom: 15,
    },
    profileCard: {
        backgroundColor: '#1c1d44',
        alignItems: 'center',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    profileName: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    metricsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginBottom: 10,
    },
    metricCard: {
        flex: 1,
        marginHorizontal: 5,
        alignItems: 'center',
        paddingVertical: 20,
    },
    metricNumber: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        marginVertical: 5,
    },
    metricLabel: {
        fontSize: 12,
        color: '#fff',
        textAlign: 'center',
    },
    bioCard: {
        backgroundColor: '#1c1d44',
    },
    bioText: {
        padding: 20,
        color: '#fff',
        fontSize: 14,
        lineHeight: 20,
        textAlign: 'justify',
    },
    infoCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1c1d44',
        borderRadius: 15,
        padding: 12,
        marginHorizontal: 20,
        marginBottom: 10,
    },
    infoText: {
        color: '#fff',
        fontSize: 14,
        marginLeft: 10,
    },
});