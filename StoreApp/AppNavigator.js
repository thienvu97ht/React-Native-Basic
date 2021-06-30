import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Categories from "./screens/Categories";
import Category from "./screens/Category";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{
          title: "Home",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="Category"
        component={Category}
        options={{
          title: "Category",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
}
