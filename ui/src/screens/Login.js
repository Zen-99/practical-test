import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TextInput } from "react-native-paper";
import React, { useState } from "react";
import apiClient from "../Services/apiClient";

const Login = () => {
  const [form, setForm] = useState({
    userName: "",
    password: "",
  });
  const handleOnSubmit = async () => {
    console.log(form.userName);
    const { data, error } = await apiClient.login({
      userName: form.userName,
      password: form.password,
    });
  };
  return (
    <KeyboardAwareScrollView
      style={{ backgroundColor: "#4c69a5" }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      scrollEnabled={false}
    >
      {/* <ScrollView style={styles.scrollview}> */}
      <View style={styles.topic}>
        <Text style={styles.text1}>Log in</Text>
      </View>
      <View style={styles.body}>
        <TextInput
          style={styles.textInput}
          mode="outlined"
          label="Username"
          theme={{ colors: { primary: "#FF8C01", underlineColor: "#FF8C01" } }}
          onChangeText={(text) => setForm({ ...form, userName: text })}
          left={<TextInput.Icon name="account" />}
        />
        <TextInput
          style={styles.textInput}
          mode="outlined"
          label="Password"
          secureTextEntry
          theme={{ colors: { primary: "#FF8C01", underlineColor: "#FF8C01" } }}
          onChangeText={(text) => setForm({ ...form, password: text })}
          left={<TextInput.Icon name="lock" />}
          right={<TextInput.Icon name="eye" />}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={handleOnSubmit}>
          Log in
        </Text>
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "white",
    height: Dimensions.get("window").height,
    paddingTop: 50,
    alignItems: "center",
  },
  topic: {
    backgroundColor: "white",
    paddingTop: 50,
    marginTop: 50,
    width: 150,
    height: 60,
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    display: "flex",
    marginTop: 50,
    width: 200,
    height: 200,
    alignItems: "center",
    justifyContent: "space-between",
    // justifyContent:"center",
    backgroundColor: "white",
    // borderBottomRightRadius:80,
  },
  textInput: {
    width: 200,
    height: 50,
    marginBottom: 10,
    backgroundColor: "white",
  },
  text1: {
    color: "black",
    fontSize: 55,
    fontFamily: "sans-serif-medium",
    fontWeight: "bold",
    paddingBottom: 10,
  },
  buttonText: {
    alignSelf: "center",
    justifyContent: "center",
    color: "white",
    fontSize: 20,
    marginTop: -2,
  },
  button: {
    height: 50,
    width: 150,
    backgroundColor: "pink",
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
  },
});
