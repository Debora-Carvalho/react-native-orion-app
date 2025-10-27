import React from "react";
import { Platform } from "react-native";
import { Ionicons as ExpoIonicons } from "@expo/vector-icons";
import Ionicons from "react-native-vector-icons/Ionicons";

interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, color = "#000" }) => {
  const isExpo = Platform.OS === "ios" || Platform.OS === "android";

  if (isExpo) {
    return <ExpoIonicons name={name as any} size={size} color={color} />;
  }

  return <Ionicons name={name} size={size} color={color} />;
};

export default Icon;
