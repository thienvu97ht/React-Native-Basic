import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import CategoryListItem from "./components/CategoryListItem";

export default function App() {
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
    {
      id: 4,
      name: "Còng tay mày lại nè!",
    },
    {
      id: 5,
      name: "Còng tay mày lại nè!",
    },
    {
      id: 6,
      name: "Còng tay mày lại nè!",
    },
  ]);

  return (
    <View>
      <FlatList
        data={categories}
        renderItem={({ item }) => <CategoryListItem category={item} />}
        keyExtractor={(item) => `${item.id}`}
        contentContainerStyle={{ paddingLeft: 16, paddingRight: 16 }}
      />
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
