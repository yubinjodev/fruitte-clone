import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import Toast from "react-native-toast-message";

import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import Button from "../components/Button";
import Input from "../components/Input";

const Login = ({ navigation }) => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const success = () => {
    Toast.show({
      type: "success",
      text1: "Success",
      text2: "✅ Logged In Successfully",
      visibilityTime: 2000,
    });
  };

  const loginHandle = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        success();
        const user = userCredential.user;
        setUser(user);
        navigation.navigate("Home", { user: user.email });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  useEffect(() => {
    return () => {
      setEmail("");
      setPassword("");
    };
  }, [user]);
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
        <View></View>

        <Button sx={"normal"} text="로그인" handlePress={loginHandle} />
        <View>
          <Text style={styles.smallText}>비밀번호 찾기</Text>
        </View>
      </View>

      <View style={styles.buttonBreak}>
        <View style={styles.linebreak}></View>
        <Text style={styles.smallText}>또는</Text>
        <View style={styles.linebreak}></View>
      </View>

      <View>
        <Button sx={"apple"} text="Apple 로그인" />
        <Button sx={"google"} text="Google 로그인" />
        <Button sx={"kakao"} text="Kakao 로그인" />
        <Button sx={"naver"} text="Naver 로그인" />
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
  smallText: {
    fontFamily: "NanumSquareRound",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 16,
    display: "flex",
    alignItems: "center",
    color: "#828282",
  },
  buttonBreak: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  linebreak: {
    border: "1px solid #828282",
    width: 132,
    margin: 20,
  },
});

export default Login;
