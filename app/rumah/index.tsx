import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { filterData, FilterItem } from "../../data/filterData";

export default function RumahListScreen() {
  const router = useRouter();
  const rumahData = filterData.filter((item) => item.category === "Rumah Adat");

  const renderRumahItem = ({ item }: { item: FilterItem }) => (
    <TouchableOpacity onPress={() => router.push(`/rumah/${item.id}`)}>
      <View style={styles.itemContainer}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.origin}>Asal: {item.origin}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rumah Adat Indonesia</Text>
      <FlatList data={rumahData} renderItem={renderRumahItem} keyExtractor={(item) => item.id} contentContainerStyle={styles.listContainer} />
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
    paddingTop: 50,
    paddingBottom: 70,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  listContainer: {
    paddingHorizontal: 20,
  },
  itemContainer: {
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 10,
    marginBottom: 15,
    overflow: "hidden",
  },
  image: {
    width: 100,
    height: 100,
  },
  textContainer: {
    justifyContent: "center",
    marginLeft: 15,
    flex: 1,
  },
  name: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  origin: {
    color: "white",
    fontSize: 14,
  },
  backButton: {
    backgroundColor: "rgba(255,255,255,0.2)",
    padding: 10,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 10,
    width: 100,
    alignSelf: "center",
  },
  backButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
