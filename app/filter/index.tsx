import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { filterData, FilterItem } from "../../data/filterData";
import { useRouter } from "expo-router";

export default function FilterScreen() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const router = useRouter();

  const categories = ["Semua", "Tari", "Makanan", "Baju Adat", "Rumah Adat", "Bahasa Daerah"];

  const filteredData = selectedCategory === "Semua" ? filterData : filterData.filter((item) => item.category === selectedCategory);

  const renderItem = ({ item }: { item: FilterItem }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={() => router.push(`/filter/${item.id}`)}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemCategory}>{item.category}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter Budaya Nusantara</Text>
      <View style={styles.pickerContainer}>
        <Picker selectedValue={selectedCategory} onValueChange={(itemValue) => setSelectedCategory(itemValue)} style={styles.picker}>
          {categories.map((category) => (
            <Picker.Item key={category} label={category} value={category} />
          ))}
        </Picker>
      </View>
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        ListFooterComponent={<View style={{ height: 50 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#212121",
    paddingTop: 50,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  pickerContainer: {
    backgroundColor: "rgba(255,255,255,0.1)",
    marginHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  picker: {
    color: "white",
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  itemContainer: {
    backgroundColor: "rgba(255,255,255,0.1)",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  itemName: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  itemCategory: {
    color: "red",
    fontSize: 14,
  },
});
