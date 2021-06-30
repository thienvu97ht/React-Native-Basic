import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Category() {
  return (
    <View>
      <Text>Category</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingLeft: 16,
    paddingRight: 16,
  },
});
