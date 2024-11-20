import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { filterData, FilterItem } from "../../data/filterData";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BajuListScreen() {
  const router = useRouter();
  const bajuData = filterData.filter((item) => item.category === "Baju Adat");

  const renderBajuItem = ({ item }: { item: FilterItem }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => {
        router.push(`/baju/${item.id}`);
      }}>
      <Image source={item.image} style={styles.image} resizeMode="cover" />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.origin}>Asal: {item.origin}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Pakaian Tradisional</Text>
      <FlatList data={bajuData} renderItem={renderBajuItem} keyExtractor={(item) => item.id} contentContainerStyle={styles.listContainer} />
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
    width: 120,
    height: 120,
  },
  textContainer: {
    justifyContent: "center",
    marginLeft: 15,
    flex: 1,
    padding: 10,
  },
  name: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
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
    marginVertical: 20,
    width: 100,
    alignSelf: "center",
    marginBottom: 70
  },
  backButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
