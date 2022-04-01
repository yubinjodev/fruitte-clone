import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Toast from "react-native-toast-message";

import "react-native-gesture-handler";
import { Routes } from "./Routes";

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
      <Toast />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    margin: 100,
  },
});
