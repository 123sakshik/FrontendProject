import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { Link } from "expo-router";

// Define your stack's parameter list
type RootStackParamList = {
  Login: undefined;
  ForgotPassword: undefined;
};

// Define the navigation prop type
type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Login"
>;

export default function LoginScreen() {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const [User_name, setUsername] = useState(""); // Corrected typo in variable name
  const [Password, setPassword] = useState("");

  // const navi = useNavigate();



  // Function to handle login
  const handleLogin = async () => {
    if (!User_name || !Password) {
      Alert.alert("Error", "Both fields are required!");
      return;
    }

    const loginData = { User_name, Password };
    console.log("Logindata : ",loginData);
    

    try {
      // Make the POST request to the login API
      const response = await axios.post("http://localhost:8000/getAgents", loginData);

      // Handle API response
      if (response.data && response.data.isValid) {
        alert('Valid User Login Success')
      } else {
        alert('Valid User Login Success')
        
        navigation.navigate("ForgotPassword"); // Navigate to the Home screen


      }
    } catch (error: any) {
      console.error("Login Error: ", error);
      Alert.alert(
        "Error",
        error.response?.data?.message || "Something went wrong. Please try again."
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={User_name}
        onChangeText={setUsername}
        keyboardType="default"
        autoCapitalize="none" // Prevents capitalization of input
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={Password}
        onChangeText={setPassword}
        secureTextEntry // Hides the input for passwords
      />
      <Button title="Login" onPress={handleLogin} />
      <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  forgotPasswordText: {
    marginTop: 10,
    color: "blue",
    textAlign: "center",
  },
}); 

