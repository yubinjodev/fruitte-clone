import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import successIcon from "../assets/successIcon.png";
import Button from "../components/Button";

const Home = ({ navigation, user }) => {
  return (
    <View style={styles.container}>
      <View style={styles.popup}>
        <Text style={styles.header}>Welcome {user}!</Text>
        <Image style={styles.success} source={successIcon} />
        <Button
          handlePress={navigation.navigate("Login")}
          sx={"normal"}
          text="로그아웃"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  popup: {
    padding: 24,
    backgroundColor: "#ffff",
    height: 400,
    width: 350,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  header: {
    fontFamily: "NanumSquareRound",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 24,
    lineHeight: 20,
    textAlign: "center",
    color: " #828282",
  },
  success: {
    width: 150,
    height: 152,
  },
});

export default Home;
