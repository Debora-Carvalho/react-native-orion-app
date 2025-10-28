import React from "react";
import { View, Text } from "react-native";

import { styles } from "./SettingsStyles"
import Header from "../../components/Header/Header";

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.text}>⚙️ Configurações</Text>
    </View>
  );
}

