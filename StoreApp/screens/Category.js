import axios from "axios";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ProductListItem from "../components/ProductListItem";

export default function Category(props) {
  const { categoryName } = props.route.params;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://60dd9b0c878c890017fa2a57.mockapi.io/products"
      );

      setProducts(result.data);
    };

    fetchData();
  }, []);

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
