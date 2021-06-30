import React from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Images from "../contants/images";

export default function CategoryListItem(props) {
  const { name } = props.category;
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        Alert.alert("Xin chào 500 ae!!!");
      }}>
      <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        <Image style={styles.categoryImage} source={Images.CONG_TAY} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 16,
    borderRadius: 4,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 10,

    marginBottom: 16,
  },

  categoryImage: {
    width: 80,
    height: 80,
  },

  title: {
    textTransform: "uppercase",
    marginBottom: 8,
    fontSize: 18,
    fontWeight: "700",
  },
});
