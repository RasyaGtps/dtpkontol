import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { filterData } from "../../data/filterData";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BajuDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const baju = filterData.find((item) => item.category === "Baju Adat" && item.id === id);

  if (!baju) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Pakaian Tidak Ditemukan</Text>
          <Text style={styles.description}>ID yang dicari: {id}</Text>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Text style={styles.backButtonText}>Kembali</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
        <Image source={baju.image} style={styles.image} resizeMode="cover" />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{baju.name}</Text>
          <Text style={styles.origin}>Asal: {baju.origin}</Text>
          <Text style={styles.description}>{baju.description}</Text>
        </View>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>Kembali</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
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
    marginTop: 180,
    width: 300,
    alignSelf: "center",
  },
  backButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
