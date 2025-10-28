import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
    },
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: 'center',
        paddingHorizontal: 20,
        paddingVertical: 40,
    },
    containerLogo: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    containerButton: {
        alignItems: 'center',
        justifyContent: "center",
        width: "100%",
        marginBottom: 20,
    },
    logo: {
        width: 200,
        height: 60,
        resizeMode: "contain",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: "#fff",
        textShadowColor: "#2e2d2dff",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
        textAlign: "center",
        marginBottom: 40,
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        alignSelf: 'center',
        width: '100%',
        backgroundColor: "#6C63FF",
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 25,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 10,
    },
});