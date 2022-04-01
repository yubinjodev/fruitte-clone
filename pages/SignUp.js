import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Toast from "react-native-toast-message";

import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

import Input from "./../components/Input";
import Button from "./../components/Button";

const SignUp = ({ navigation }) => {
  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const success = () => {
    Toast.show({
      type: "success",
      text1: "Success",
      text2: "✅ Signed Up Successfully",
      visibilityTime:2000
    });
  };

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        success();
        const user = userCredential.user;
        setUser(user);
        navigation.navigate("Login");
      }
    );
  };

  useEffect(() => {
    return () => {
      setName("");
      setPhone("");
      setEmail("");
      setPassword("");
    };
  }, [user]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        회원가입을 위해 아래 정보를 입력해주세요
      </Text>

      <View>
        <Input
          text={name}
          handleChange={(text) => setName(text)}
          holder="이름"
          password={false}
        />
        <Input
          text={phone}
          handleChange={(text) => setPhone(text)}
          holder="전화번호"
          password={false}
        />
        <Input
          text={email}
          handleChange={(text) => setEmail(text)}
          holder="이메일"
          password={false}
        />
        <Input
          text={password}
          handleChange={(text) => setPassword(text)}
          holder="비밀번호"
          password={true}
        />
        <Input text={password} holder="비밀번호 재확인" password={true} />
      </View>
      <Button sx={"normal"} handlePress={handleSignUp} text="회원가입" />

      <View style={styles.concat}>
        <Text style={styles.signUp}>이미 계정이 있으신가요?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.signUpRedirect}> 로그인 하러가기</Text>
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
    width: 336,
    height: 20,
    fontFamily: "NanumSquareRound",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 20,
    textAlign: "center",
    color: "#414141",
    marginBottom: 10,
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

export default SignUp;
