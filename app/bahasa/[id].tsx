import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { filterData } from "../../data/filterData";

export default function BahasaDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const bahasa = filterData.find((item) => item.category === "Bahasa Daerah" && item.id === id);

  if (!bahasa) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Bahasa Tidak Ditemukan</Text>
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
        <View style={styles.contentContainer}>
          {bahasa.image && <Image source={bahasa.image} style={styles.image} resizeMode="cover" />}
          <Text style={styles.title}>{bahasa.name}</Text>
          <Text style={styles.region}>Wilayah: {bahasa.origin}</Text>
          <Text style={styles.description}>{bahasa.description}</Text>
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Text style={styles.backButtonText}>Kembali</Text>
          </TouchableOpacity>
        </View>
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
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 15,
    textAlign: "center",
  },
  region: {
    color: "white",
    fontSize: 16,
    marginBottom: 15,
  },
  description: {
    color: "white",
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 20,
    textAlign: "justify",
  },
  backButton: {
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: 10,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 320,
    width: 300,
    alignSelf: "center",
  },
  backButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
