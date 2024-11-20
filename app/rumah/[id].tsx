import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { filterData } from "../../data/filterData";

export default function RumahDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const rumah = filterData.find((r) => r.id === id && r.category === "Rumah Adat");

  if (!rumah) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Rumah Tidak Ditemukan</Text>
        <Text style={styles.description}>ID yang dicari: {id}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.contentContainer}>
          <Image source={rumah.image} style={styles.image} />
          <Text style={styles.title}>{rumah.name}</Text>
          <Text style={styles.origin}>Asal: {rumah.origin}</Text>
          <Text style={styles.description}>{rumah.description}</Text>
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
  scrollContainer: {
    flexGrow: 1,
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
