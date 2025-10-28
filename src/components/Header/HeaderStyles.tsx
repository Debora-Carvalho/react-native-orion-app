import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        backgroundColor: "#0b0c2a",
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#6C63FF",
    },
    logo: {
        color: "#6C63FF",
        fontSize: 20,
        fontWeight: "bold",
        letterSpacing: 1.2,
    },
});