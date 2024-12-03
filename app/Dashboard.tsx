import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialIcons, Feather, AntDesign } from "@expo/vector-icons";

export default function DashboardScreen() {
  return (
    <View style={styles.container}>
      {/* Top Navigation */}
      <View style={styles.navbar}>
        <Feather name="menu" size={24} color="#fff" />
        <Text style={styles.navTitle}>Dashboard</Text>
        <Feather name="bell" size={24} color="#fff" />
      </View>

      {/* Profile Section */}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: "https://via.placeholder.com/100" }} // Replace with user image
          style={styles.profileImage}
        />
        <View style={styles.profileDetails}>
          <Text style={styles.greeting}>Hi, Jack Thomas</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </View>
      </View>

      {/* Cases Grid */}
      <View style={styles.grid}>
        <TouchableOpacity style={styles.card}>
          <MaterialIcons name="check-circle" size={40} color="#4CAF50" />
          <Text style={styles.cardText}>Approved Cases</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <MaterialIcons name="access-time" size={40} color="#FFC107" />
          <Text style={styles.cardText}>Pending Cases</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <MaterialIcons name="cancel" size={40} color="#F44336" />
          <Text style={styles.cardText}>Rejected Cases</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <AntDesign name="filetext1" size={40} color="#2196F3" />
          <Text style={styles.cardText}>Total Cases</Text>
        </TouchableOpacity>
      </View>

      {/* Floating Button */}
      <TouchableOpacity style={styles.floatingButton}>
        <AntDesign name="plus" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  navbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#3f51b5",
    padding: 15,
  },
  navTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  profileContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    margin: 10,
    padding: 10,
    borderRadius: 10,
    elevation: 2, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  profileDetails: {
    flex: 1,
  },
  greeting: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  description: {
    fontSize: 14,
    color: "#555",
    marginTop: 5,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    padding: 10,
  },
  card: {
    width: "47%",
    backgroundColor: "#fff",
    marginVertical: 10,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  cardText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    color: "#333",
  },
  floatingButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#3f51b5",
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
});
