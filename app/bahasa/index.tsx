import React from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import { filterData, FilterItem } from "../../data/filterData";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BahasaListScreen() {
  const router = useRouter();
  const bahasaData = filterData.filter((item) => item.category === "Bahasa Daerah");

  const renderItem = ({ item }: { item: FilterItem }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => {
        router.push(`/bahasa/${item.id}`);
      }}>
      {item.image && <Image source={item.image} style={styles.itemImage} resizeMode="cover" />}
      <View style={styles.itemContent}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.region}>Wilayah: {item.origin}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Bahasa Daerah</Text>
      <FlatList data={bahasaData} renderItem={renderItem} keyExtractor={(item) => item.id} contentContainerStyle={styles.listContainer} />
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>Kembali</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121",
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  listContainer: {
    padding: 20,
  },
  itemContainer: {
    backgroundColor: "rgba(255,255,255,0.1)",
    marginBottom: 15,
    borderRadius: 12,
    overflow: "hidden",
  },
  itemImage: {
    width: "100%",
    height: 150,
  },
  itemContent: {
    padding: 15,
  },
  name: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  region: {
    color: "white",
    fontSize: 14,
  },
  backButton: {
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: 10,
    borderRadius: 15,
    alignItems: "center",
    marginVertical: 20,
    width: 100,
    alignSelf: "center",
    marginBottom: 85,
  },
  backButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
