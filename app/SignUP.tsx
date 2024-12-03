import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  User_Name: undefined;
  Login: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "User_Name">;

export default function RegistrationScreen({ navigation }: Props) {
  const [name, setName] = useState("");
  const [User_Name, setUser_Name] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [reference, setReference] = useState("");

  const handleRegister = async () => {
    // Basic validation
    if (!name.trim()) return Alert.alert("Error", "Please enter your name.");
    if (!User_Name.trim() || !User_Name.includes("@")) return Alert.alert("Error", "Please enter a valid email address.");
    if (!password.trim() || !password.includes("$"))
      return Alert.alert("Error", "Password must include at least one special character ($).");
    if (!phone.trim() || phone.length < 10) return Alert.alert("Error", "Please enter a valid 10-digit phone number.");
    if (!location.trim()) return Alert.alert("Error", "Please provide your location.");
    if (!reference.trim()) return Alert.alert("Error", "Please provide a reference.");

    try {
      const response = await fetch("http://localhost:8000/get-Admin", {
        // Replace `192.168.x.x` with your local network IP address
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          User_Name,
          password,
          phone,
          location,
          reference,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to register. Please try again.");
      }

      const data = await response.json();

      if (data.success) {
        Alert.alert("Success", "Registration Successful!");
        navigation.navigate("Login");
      } else {
        Alert.alert("Error", data.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Unable to complete registration. Please check your connection.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.textBlack}>Create your account below</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="User_Name"
        value={User_Name}
        onChangeText={setUser_Name}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Location"
        value={location}
        onChangeText={setLocation}
      />
      <TextInput
        style={styles.input}
        placeholder="Reference"
        value={reference}
        onChangeText={setReference}
      />
      <Button title="Sign Up" onPress={handleRegister} color="#2692ff" />
     {/* Centered section for "Already Have An Account?" */}
     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.textBlue}>Already Have An Account? </Text>
          <Button
            title="Login"
            onPress={() => navigation.navigate("Login")}
            color="#2692ff"
          />
        </View>
      </View>
    </View>
  );
}

    

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    color: "#333",
  },
  textBlack: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
  textBlue: {
    fontSize: 16,
    color: "#000000", // Ensures the color is blue
    //fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
});

