import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";

import appleIcon from "../assets/appleIcon.png";
import googleIcon from "../assets/googleIcon.png";
import kakaoIcon from "../assets/kakaoIcon.png";
import naverIcon from "../assets/naverIcon.png";

const Button = ({ text, handlePress, sx }) => {
  let button;

  if (sx === "normal") {
    button = (
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  }
  if (sx === "apple") {
    button = (
      <TouchableOpacity style={styles.apple} onPress={handlePress}>
        <Image style={styles.icons} source={appleIcon} />
        &nbsp;
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  }
  if (sx === "google") {
    button = (
      <TouchableOpacity style={styles.google} onPress={handlePress}>
        <Image style={styles.icons} source={googleIcon} />
        &nbsp;
        <Text style={styles.textBlack}>{text}</Text>
      </TouchableOpacity>
    );
  }
  if (sx === "kakao") {
    button = (
      <TouchableOpacity style={styles.kakao} onPress={handlePress}>
        <Image style={styles.icons} source={kakaoIcon} />
        &nbsp;
        <Text style={styles.textBlack}>{text}</Text>
      </TouchableOpacity>
    );
  }
  if (sx === "naver") {
    button = (
      <TouchableOpacity style={styles.naver} onPress={handlePress}>
        <Image style={styles.icons} source={naverIcon} />
        &nbsp;
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  }

  return <>{button}</>;
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
  apple: {
    display: "flex",
    flexDirection: "row",
    textAlign: "left",
    backgroundColor: "#000000",
    border: "1px solid #000000",
    borderRadius: 12,
    width: 336,
    height: 52,
    margin: 10,
    padding: 20,
  },
  google: {
    display: "flex",
    textAlign: "left",
    flexDirection: "row",
    backgroundColor: "#ffff",
    border: "1px solid #ffff",
    borderRadius: 12,
    width: 336,
    height: 52,
    margin: 10,
    padding: 20,
  },
  kakao: {
    display: "flex",
    flexDirection: "row",
    textAlign: "left",
    backgroundColor: "#FFE812",
    border: "1px solid #FFE812",
    borderRadius: 12,
    width: 336,
    height: 52,
    margin: 10,
    padding: 20,
  },
  naver: {
    display: "flex",
    flexDirection: "row",
    textAlign: "left",

    backgroundColor: "#00CE5D",
    border: "1px solid #00CE5D",
    borderRadius: 12,
    width: 336,
    height: 52,
    margin: 10,
    padding: 20,
  },
  text: {
    fontFamily: "NanumSquareRound",
    color: "#FFFFFF",
    fontWeight: 800,
    fontSize: 16,
    lineHeight: 20,
  },
  textBlack: {
    fontFamily: "NanumSquareRound",
    color: "#00000",
    fontWeight: 800,
    fontSize: 16,
    lineHeight: 20,
  },
  icons: { height: 20, width: 20 },
});

export default Button;
