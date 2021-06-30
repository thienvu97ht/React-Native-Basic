import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import CategoryListItem from "./components/CategoryListItem";
import Images from "./contants/images";

export default function App() {
  return (
    <View>
      <ScrollView
        style={{ paddingLeft: 16, paddingRight: 16 }}
        contentContainerStyle={{ backgroundColor: "#F00" }}>
        <CategoryListItem title="Tao có súng đây nè!" image={Images.GUN} />
        <CategoryListItem
          title="Công an đến bắt mày nè!"
          image={Images.POLYCE_CAR}
        />
        <CategoryListItem
          title="Còng tay mày lại nè!"
          image={Images.CONG_TAY}
        />
        <CategoryListItem title="Tao có súng đây nè!" image={Images.GUN} />
        <CategoryListItem
          title="Công an đến bắt mày nè!"
          image={Images.POLYCE_CAR}
        />
        <CategoryListItem
          title="Còng tay mày lại nè!"
          image={Images.CONG_TAY}
        />
      </ScrollView>
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
