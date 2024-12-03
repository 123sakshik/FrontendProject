import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false); // Track whether OTP is sent
  const [otp, setOtp] = useState(""); // Store generated OTP
  const [enteredOtp, setEnteredOtp] = useState(""); // OTP entered by the user

  const handleSendOtp = () => {
    if (email) {
      // Simulate sending OTP
      const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate a 6-digit OTP
      setOtp(generatedOtp);
      setOtpSent(true);
      Alert.alert("Success", `OTP sent to ${email}`);
      console.log(`Generated OTP (for testing): ${generatedOtp}`); // Log OTP for testing
    } else {
      Alert.alert("Error", "Please enter your email address!");
    }
  };

  const handleVerifyOtp = () => {
    if (enteredOtp === otp) {
      Alert.alert("Success", "OTP verified! You can reset your password now.");
      // Navigate to the reset password screen or proceed to the next step
    } else {
      Alert.alert("Error", "Invalid OTP! Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>

      {/* Step 1: Enter Email */}
      {!otpSent ? (
        <>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <Button title="Send OTP" onPress={handleSendOtp} />
        </>
      ) : (
        <>
          {/* Step 2: Enter OTP */}
          <Text style={styles.infoText}>
            An OTP has been sent to your email. Please enter it below:
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter OTP"
            value={enteredOtp}
            onChangeText={setEnteredOtp}
            keyboardType="numeric"
            maxLength={6} // Restrict OTP length to 6 digits
          />
          <Button title="Verify OTP" onPress={handleVerifyOtp} />
        </>
      )}
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
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
    color: "#666",
  },
});

