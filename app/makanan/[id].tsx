import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { filterData } from "../../data/filterData";

export default function MakananDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const makanan = filterData.find((m) => m.id === id && m.category === "Makanan");

  if (!makanan) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Makanan Tidak Ditemukan</Text>
        <Text style={styles.description}>ID yang dicari: {id}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.contentContainer}>
          <Image source={makanan.image} style={styles.image} />
          <Text style={styles.title}>{makanan.name}</Text>
          <Text style={styles.origin}>Asal: {makanan.origin}</Text>
          <Text style={styles.description}>{makanan.description}</Text>
        </View>
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
  scrollContent: {
    padding: 20,
    flexGrow: 1,
  },
  contentContainer: {
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 20,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 15,
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
    padding: 10,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 100,
    width: 300,
    alignSelf: "center",
  },
  backButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
