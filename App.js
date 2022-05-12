import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./components/header";
import TodoItem from "./components/elevatorItem";
import Login from "./components/login";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const [elevators, setElevators] = useState([
// GET request using fetch inside useEffect React hook
fetch('https://api.npms.io/v2/search?q=react')
.then(response => response.json())
.then(data => setTotalReactPackages(data.total))
  ]);

  const pressHandler = (key) => {
    setElevators((prevTodos) => {
      return prevTodos.filter((elevator) => elevator.key != key);
    });
  };

  // When submit and true, send to homepage
  const submitHandler = (text) => {
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Login submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList
            data={elevators}
            renderItem={({ item }) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
