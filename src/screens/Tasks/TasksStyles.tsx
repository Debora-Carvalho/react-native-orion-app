import { StyleSheet } from 'react-native';

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
        justifyContent: "center",
        paddingHorizontal: 20,
        marginBottom: 15,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginLeft: 10,
    },
    tabsContainer: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginBottom: 15,
    },
    tabButton: {
        paddingVertical: 6,
        paddingHorizontal: 15,
        borderRadius: 20,
        backgroundColor: '#1c1d44',
        marginRight: 10,
    },
    tabActive: {
        backgroundColor: '#6C63FF',
    },
    tabText: {
        color: '#fff',
        fontSize: 14,
    },
    tabTextActive: {
        color: '#fff',
        fontWeight: 'bold',
    },

});