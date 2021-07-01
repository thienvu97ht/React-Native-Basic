import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ProductListItem from "../components/ProductListItem";

export default function Category(props) {
  const { categoryName } = props.route.params;
  const [products, setProducts] = useState([
    {
      id: 1,
      images: [
        {
          url: "https://product.hstatic.net/1000281824/product/6494b116-a95f-42e1-bd99-33ae0fef78a3_c36ead4edfde4943b98b4ad16eb74463_grande.jpeg",
        },
      ],
      name: "Balo Hạt Nhân Degrey",
      price: 420000,
    },
    {
      id: 2,
      images: [
        {
          url: "https://product.hstatic.net/1000281824/product/1961e24d-55da-4c5a-bde3-b1d2effd58d6_4eeced7e1b174b949b332388a9e441ee_grande.jpeg",
        },
      ],
      name: "Balo Degrey Quằng Quện",
      price: 420000,
    },
  ]);

  return (
    <FlatList
      data={products}
      contentContainerStyle={styles.container}
      numColumns={2}
      keyExtractor={(item) => `${item.id}`}
      renderItem={({ item }) => (
        <View style={styles.wrapper}>
          <ProductListItem product={item} />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingHorizontal: 8,
  },

  wrapper: {
    flex: 1,
    paddingHorizontal: 8,
  },
});
