import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles } from "./CoursesStyles"
import Header from "../../components/Header/Header";

export default function CursosScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.text}>🚀 Cursos de Astronomia</Text>
    </View>
  );
}
