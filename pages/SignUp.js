import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Input from "./../components/Input";
import Button from "./../components/Button";

const SignUp = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        회원가입을 위해 아래 정보를 입력해주세요
      </Text>

      <View>
        <Input holder="이름" password={false} />
        <Input holder="전화번호" password={false} />
        <Input holder="이메일" password={false} />
        <Input holder="비밀번호" password={true} />
        <Input holder="비밀번호 재확인" password={true} />
      </View>
      <Button text="회원가입" />

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
