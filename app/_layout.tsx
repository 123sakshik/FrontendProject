import { Stack } from "expo-router";

export default function RootLayout() {
  return (
  <Stack>
    <Stack.Screen 
    name ="index"
    options={{
      headerTitle:"VidarbhaCentreLoan",
      headerLeft: () => <></>,
        }}
      />
    <Stack.Screen
     name ="home"
    options={{
      headerTitle:"HomeScreen",
      }}
      />
    <Stack.Screen 
    name = "not-found"
    options={
      {headerShown: false,}} 
      />
      {/* <Stack.Screen 
    name = "Register"
    options={
      {headerShown: false,}} 
      />
      <Stack.Screen 
    name = "Login"
    options={
      {headerShown: false,}} /> */}
      </Stack>
    );
}
