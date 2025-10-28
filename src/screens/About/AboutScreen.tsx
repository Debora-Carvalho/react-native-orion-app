import React from "react";
import { View, Text } from "react-native";

import { styles } from "./AboutStyles"
import Header from "../../components/Header/Header";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.text}>Sobre</Text>
    </View>
  );
}

