import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import auth from "@react-native-firebase/auth";

import Button from "../components/Button";
import Input from "../components/Input";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandle = (e) => {
    e.preventDefault();
    auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("sign");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          console.log("That email address is already in use!");
        }

        if (error.code === "auth/invalid-email") {
          console.log("That email address is invalid!");
        }

        console.error(error);
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>프루떼에 오신것을 환영합니다</Text>

      <View>
        <Input
          text={email}
          handleChange={(text) => setEmail(text)}
          holder="이메일/ID"
          password={false}
        />
        <Input
          text={password}
          handleChange={(text) => setPassword(text)}
          holder="비밀번호"
          password={true}
        />
        <View>
          <Text style={{ float: "left" }}>둘러보기</Text>
          <Text style={{ float: "right" }}>비밀번호 찾기</Text>
        </View>
        <Button text="로그인" handlePress={(e) => loginHandle(e)} />
      </View>

      <View style={styles.concat}>
        <Text style={styles.signUp}>아직 계정이 없으신가요?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Sign Up")}>
          <Text style={styles.signUpRedirect}> 회원가입 하러가기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  header: {
    fontFamily: "NanumSquareRound",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 24,
    lineHeight: 32,
    textAlign: "center",
    color: "#4C9C2E",
    marginTop: 100,
  },
  concat: {
    display: "flex",
    flexDirection: "row",
    position: "absolute",
    width: 300,
    height: 20,
    left: 48,
    top: 768,
  },
  signUp: {
    fontFamily: "NanumSquareRound",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 20,
    alignItems: "center",
    textAlign: "center",
    color: "#828282",
  },
  signUpRedirect: {
    fontFamily: "NanumSquareRound",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: 16,
    lineHeight: 20,
    alignItems: "center",
    textAlign: "center",
    color: "#4C9C2E",
  },
});

export default Login;
