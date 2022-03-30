import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

const Input = ({ text, handleChange, holder, password }) => {
  return (
    <TextInput
      style={styles.input}
      value={text}
      onCHangeText={handleChange}
      placeholder={holder}
      secureTextEntry={password}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#FFFFFF",
    border: "1px solid #E0E0E0",
    borderRadius: " 12px",
    width: 336,
    height: 52,
  },
});

export default Input;
