import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, Animated, StatusBar } from "react-native";

const SplashScreen = ({ onFinish }: { onFinish: () => void }) => {
  const [fadeAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();

    const timeout = setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1500,
        useNativeDriver: true,
      }).start();

      setTimeout(onFinish, 1500);
    }, 1500);

    return () => clearTimeout(timeout);
  }, [fadeAnim, onFinish]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      <Animated.Image source={require("../assets/images/logo.png")} style={[styles.logo, { opacity: fadeAnim }]} />
      <Animated.Text style={[styles.text, { opacity: fadeAnim }]}>Menjelajahi Warisan {"\n"} Nusantara</Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 50,
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    color: "red",
    textAlign: "center", // Memusatkan teks
  },
});

export default SplashScreen;
