import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/StackRoutes";

import { styles } from "./WelcomeStyles";

type NavigationProps = NativeStackNavigationProp<RootStackParamList, "Welcome">;

export default function WelcomeScreen() {
  const navigation = useNavigation<NavigationProps>();

  return (
    <ImageBackground
      source={{ uri: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa" }}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Órion 🚀</Text>
        <Text style={styles.subtitle}>Qualidade de aprendizado de outro mundo</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Drawer")}
        >
          <Text style={styles.buttonText}>Começar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}