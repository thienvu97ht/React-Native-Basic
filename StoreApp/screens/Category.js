import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Category({ route }) {
  const { categoryName } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text__content}>{categoryName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  text__content: {
    fontSize: 24,
  },
});
