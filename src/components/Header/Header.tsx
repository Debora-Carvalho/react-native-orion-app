import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./HeaderStyles";

export default function Header() {
  const navigation = useNavigation(); // sem tipagem

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://i.pravatar.cc/150?img=12" }}
        style={styles.profileImage}
      />
      <Text style={styles.logo}>ÓRION</Text>
      <TouchableOpacity onPress={() => navigation.openDrawer?.()}>
        {/* adiciona o ?. para evitar erro se não existir */}
        <Icon name="menu-outline" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}