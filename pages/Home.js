import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import { signOut } from "firebase/auth";
import { auth } from "./../firebase";

import successIcon from "../assets/successIcon.png";
import Button from "../components/Button";

const Home = ({ route, navigation }) => {
  const user = route.params.user;

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigation.navigate("Login");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.popup}>
        <Text style={styles.header}>Welcome {user}!</Text>
        <Image style={styles.success} source={successIcon} />
        <Button
          handlePress={() => navigation.navigate("Login")}
          sx={"normal"}
          text="๋ก๊ทธ์์"
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
    lineHeight: 30,
  },
  success: {
    width: 150,
    height: 152,
    margin: 50,
  },
});

export default Home;
