// In App.js in a new project
import * as React from "react";
import { View, useWindowDimensions } from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function HomeScreen() {
  const { height: windowHeight } = useWindowDimensions();
  const headerHeight = useHeaderHeight();
  return (
    <View
      style={{
        height: windowHeight - headerHeight,
        backgroundColor: "black",
      }}
    />
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: { ...DefaultTheme.colors, background: "white" },
      }}
    >
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
