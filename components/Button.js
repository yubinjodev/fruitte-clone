import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

const Button = ({ text, handlePress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    textAlign: "center",
    justifyContent: "center",
    backgroundColor: "#4C9C2E",
    border: "1px solid #4C9C2E",
    borderRadius: 12,
    width: 336,
    height: 52,
    margin: 10,
  },
  text: {
    fontFamily: "NanumSquareRound",
    color: "#FFFFFF",
    fontWeight: 800,
    fontSize: 16,
    lineHeight: 20,
  },
});

export default Button;
