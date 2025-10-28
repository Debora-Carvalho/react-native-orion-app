import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles } from "./TasksStyles"
import Header from "../../components/Header/Header";

export default function TasksScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.text}>🛰️ Atividades</Text>
    </View>
  );
}

