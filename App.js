import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

import { DataStore } from "aws-amplify";
import { Desk } from "./src/models";

export default function App() {
  const write = async () => {
    try {
      await DataStore.save(
        new Desk({
          region: "My First Post",
          country: "My First Post",
          city: "My First Post",
          building: "My First Post",
          floor: 1,
          deskId: "My First Post",
        })
      );
      console.log("Post saved successfully!");
    } catch (error) {
      console.log("Error saving post", error);
    }
  };

  const read = async () => {
    try {
      const desks = await DataStore.query(Desk);
      console.log(desks);
    } catch (error) {
      console.log("Error retrieving desks", error);
    }
  };

  // useEffect(() => {
  //   write();
  //   read();
  // }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button onPress={() => read()} title="read" />
      <Button onPress={() => write()} title="write" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
