import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Stack } from "expo-router";
import CustomNavbar from "../components/CustomNavbar";
import SplashScreen from "../components/SplashScreen";

export default function Layout() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Timer untuk menghilangkan SplashScreen
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Durasi SplashScreen

    return () => clearTimeout(timer); // Membersihkan timer
  }, []);

  if (showSplash) {
    return (
      <SplashScreen
        onFinish={() => {
          setShowSplash(false);
        }}
      />
    );
  }
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
