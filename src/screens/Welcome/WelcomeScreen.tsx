import React from "react";
import { View, Text, ImageBackground, Image, TouchableOpacity, StatusBar } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/StackRoutes";

import { styles } from "./WelcomeStyles";

import Icon from "react-native-vector-icons/Ionicons";

type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Welcome">;

export default function WelcomeScreen() {
    const navigation = useNavigation<NavigationProps>();

    return (
        <ImageBackground
            source={require("../../assets/img/background-welcome.jpg")}
            style={styles.background}
        >
            <View style={styles.container}>
                <View style={styles.containerLogo}>
                    <Image
                        source={require("../../assets/img/logo-orion-branca.png")}
                        style={styles.logo}
                    />

                    <Text style={styles.subtitle}>
                        Qualidade de aprendizado de outro mundo
                    </Text>
                </View>


                <View style={styles.containerButton}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate("Drawer")}
                    >
                        <Text style={styles.buttonText}>Começar</Text>
                        <Icon name="rocket-outline" size={25} color="#FFF" />
                    </TouchableOpacity>
                </View>
            </View>

            <StatusBar   
                barStyle="light-content" backgroundColor="#000"
            />
        </ImageBackground>
    );
}