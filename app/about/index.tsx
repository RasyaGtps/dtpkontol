import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

export default function AboutAppScreen() {
  const logo = require("../../assets/images/logo.png");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={logo} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>Tentang Aplikasi</Text>
        <Text style={styles.description}>
          Aplikasi ini dirancang untuk memperkenalkan kekayaan budaya Nusantara. Dengan antarmuka yang intuitif dan interaktif, pengguna dapat menjelajahi berbagai kategori budaya seperti tari tradisional, makanan khas, baju adat, rumah
          adat, dan bahasa daerah.
        </Text>

        <Text style={styles.subTitle}>Fitur Unggulan</Text>
        <Text style={styles.description}>
          {"\n"}-Informasi mendalam tentang budaya Indonesia.{"\n"}-Gambar dan deskripsi yang menarik.{"\n"}-Fitur filter untuk mempermudah pencarian.{"\n"}-Desain antarmuka modern dan mudah digunakan.
        </Text>

        <Text style={styles.subTitle}>Tujuan Aplikasi</Text>
        <Text style={styles.description}>
          Kami berharap aplikasi ini dapat menjadi jendela informasi yang membantu masyarakat, terutama generasi muda, untuk lebih mengenal, menghargai, dan melestarikan budaya Indonesia yang kaya dan beragam.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#212121",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 150,
    marginBottom: 20,
  },
  content: {
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 50,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  subTitle: {
    color: "red",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
  description: {
    color: "white",
    fontSize: 16,
    lineHeight: 24,
    textAlign: "justify",
  },
});
