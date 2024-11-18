import React from "react";
import { View, Text, ScrollView, StyleSheet, StatusBar, Dimensions } from "react-native";
import { MaterialIcons, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import CategoryCard from "../components/CategoryCard";

const { height } = Dimensions.get("window");

const categories = [
  { name: "Tari", icon: <MaterialIcons name="theater-comedy" size={80} color="white" /> },
  { name: "Makanan", icon: <MaterialIcons name="restaurant" size={80} color="white" /> },
  { name: "Baju Adat", icon: <FontAwesome5 name="tshirt" size={80} color="white" /> },
  { name: "Rumah Adat", icon: <MaterialIcons name="house" size={80} color="white" /> },
  { name: "Bahasa Daerah", icon: <MaterialCommunityIcons name="translate" size={80} color="white" /> },
];

export default function IndexScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#212121" />
      <Text style={styles.title}>Jelajahi Nusantara</Text>
      <Text style={styles.subtitle}>Temukan Keberagaman Budaya Indonesia</Text>

      <ScrollView contentContainerStyle={styles.cardContainer} showsVerticalScrollIndicator={false}>
        {categories.map((category, index) => (
          <CategoryCard key={index} name={category.name} icon={category.icon} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121",
    minHeight: height,
    paddingTop: 50,
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    color: "white",
    fontSize: 16,
    marginBottom: 20,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 15,
  },
});
