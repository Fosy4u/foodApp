import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import RestaurantDetails from "../screens/RestaurantDetails";
import OrderCompleted from "../screens/OrderCompleted";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "../redux/store";
// import OrderCompleted from "../screens/OrderCompleted";
const store = configureStore();

export default function RootNavigation() {
  const Stack = createNativeStackNavigator();

  const screenOptions = {
    headerShown: true,
  };

  return (
    <ReduxProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <Stack.Screen
            name="Home"
            component={Home}
            screenOptions={screenOptions}
          />
          <Stack.Screen
            name="RestaurantDetails"
            component={RestaurantDetails}
            screenOptions={screenOptions}
          />
          <Stack.Screen
            name="OrderCompleted"
            component={OrderCompleted}
            screenOptions={screenOptions}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxProvider>
  );
}
