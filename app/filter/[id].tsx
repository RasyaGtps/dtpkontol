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
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} resizeMode="cover" />
      <ScrollView style={styles.textContainer}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.category}>Kategori: {item.category}</Text>
        <Text style={styles.origin}>Asal: {item.origin}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </ScrollView>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>Kembali</Text>
      </TouchableOpacity>
    </View>
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
    borderRadius: 20,
  },
  textContainer: {
    flex: 1,
    padding: 20,
    marginBottom: 80,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 15,
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
    marginBottom: 10,
  },
  backButton: {
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    position: "absolute",
    bottom: 80,
    left: 20,
    right: 20,
  },
  backButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
 