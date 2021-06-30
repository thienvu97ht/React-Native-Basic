import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import "react-native-gesture-handler";
import AppNavigator from "./AppNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
