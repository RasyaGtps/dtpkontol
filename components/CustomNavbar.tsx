import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Home, Filter, Info } from "lucide-react-native";

export default function CustomNavbar() {
  const router = useRouter();

  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => router.push("/")}>
        <Home color="white" size={24} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/filter")}>
        <Filter color="white" size={24} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("/about")}>
        <Info color="white" size={24} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 60,
    backgroundColor: "rgba(0,0,0,0.8)",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});
