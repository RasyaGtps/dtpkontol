import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { tariData } from "../../data/tari";

export default function TariDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();

  console.log("Received ID:", id);
  console.log("All Tari Data:", tariData);

  const tari = tariData.find((t) => t.id === id);

  console.log("Found Tari:", tari);

  if (!tari) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Tari Tidak Ditemukan</Text>
        <Text style={styles.description}>ID yang dicari: {id}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: tari.imageUrl }} style={styles.image} resizeMode="cover" />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{tari.name}</Text>
        <Text style={styles.origin}>Asal: {tari.origin}</Text>
        <Text style={styles.description}>{tari.description}</Text>
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
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
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
    marginTop: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  backButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
