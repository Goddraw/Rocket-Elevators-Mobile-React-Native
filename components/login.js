import React, { useState } from "react";
import { StyleSheet, Text, TextInput, Button, View } from "react-native";

export default function Login({submitHandler}) {
  const [text, setText] = useState("");
  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        placeholder="Enter Email Here"
        onChangeText={changeHandler}
        style={styles.input}
      />
      {/* Path this to homepage if email is in the employee table in the database */}
      <Button onPress={() => submitHandler(text)} title='Submit' color='red'/>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
