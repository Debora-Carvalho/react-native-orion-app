import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles } from "./ProfileStyles"
import Header from "../../components/Header/Header";

export default function PerfilScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.text}>👩‍🚀 Perfil</Text>
    </View>
  );
};
