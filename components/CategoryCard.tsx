import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

interface CategoryCardProps {
  name: string;
  icon: React.ReactNode;
}

export default function CategoryCard({ name, icon }: CategoryCardProps) {
  const router = useRouter();

  const handlePress = () => {
    router.push(`/${name.toLowerCase().replace(/\s+/g, "-")}`);
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <View style={styles.iconContainer}>{icon}</View>
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 15,
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
  },
  iconContainer: {
    marginBottom: 10,
  },
  name: {
    color: "white",
    fontWeight: "600",
  },
});
