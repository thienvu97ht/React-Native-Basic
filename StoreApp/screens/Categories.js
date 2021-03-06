import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import CategoryListItem from "../components/CategoryListItem";
import Images from "../contants/images";

export default function Categories( ) {
  const { navigation } = props;
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Áo thun!",
      image: Images.GUN,
    },
    {
      id: 2,
      name: "Áo sơ mi!",
      image: Images.POLYCE_CAR,
    },
    {
      id: 3,
      name: "Hoodie!",
      image: Images.CONG_TAY,
    },
  ]);

  return (
    <View>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <CategoryListItem
            category={item}
            onPress={() =>
              navigation.navigate("Category", { categoryName: item.name })
            }
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
