import React from "react";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

export default function Splash() {
  return (
    <View style={styles.viewStyles}>
      <Text style={styles.textStyles}>Fluer</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyles: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4e9f65",
  },
  textStyles: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
  },
});