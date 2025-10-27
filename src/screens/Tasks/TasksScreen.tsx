import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles } from "./TasksStyles"

export default function TasksScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🛰️ Atividades</Text>
    </View>
  );
}

