import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import CategoryListItem from "../components/CategoryListItem";

export default function Categories(props) {
  const { navigation } = props;
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Tao có súng đây nè!",
    },
    {
      id: 2,
      name: "Công an đến bắt mày nè!",
    },
    {
      id: 3,
      name: "Còng tay mày lại nè!",
    },
  ]);

  return (
    <View>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <CategoryListItem
            category={item}
            onPress={() => navigation.navigate("Category")}
          />
        )}
        keyExtractor={(item) => `${item.id}`}
        contentContainerStyle={styles.container}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
});
