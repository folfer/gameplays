import React from "react";
import { StyleSheet, View } from "react-native";
import { SingIn } from "./src/screens/SingIn";

export default function App() {
  return (
    <View style={styles.container}>
      <SingIn />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
