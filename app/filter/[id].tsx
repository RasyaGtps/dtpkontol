import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { filterData } from "../../data/filterData";

export default function FilterDetailScreen() {
  const params = useLocalSearchParams();
  const router = useRouter();

  const id = params.id as string;
  const item = filterData.find((i) => i.id === id);

  if (!item) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Item Tidak Ditemukan</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} resizeMode="cover" />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.category}>Kategori: {item.category}</Text>
        <Text style={styles.origin}>Asal: {item.origin}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>Kembali</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121",
  },
  image: {
    width: "100%",
    height: 300,
  },
  contentContainer: {
    padding: 20,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  category: {
    color: "white",
    fontSize: 16,
    marginBottom: 10,
  },
  origin: {
    color: "white",
    fontSize: 16,
    marginBottom: 15,
  },
  description: {
    color: "white",
    fontSize: 14,
    lineHeight: 22,
  },
  backButton: {
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: 15,
    margin: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  backButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
