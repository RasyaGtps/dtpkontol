import { Stack } from "expo-router";
import { View } from "react-native";
import CustomNavbar from "../components/CustomNavbar";

export default function Layout() {
  return (
    <View style={{ flex: 1, backgroundColor: "#212121" }}>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#212121" },
        }}
      />
      <CustomNavbar />
    </View>
  );
}
