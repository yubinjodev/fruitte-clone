import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";

const Stack = createStackNavigator();

const Routes = () => {
  return;
  <Stack.Navigator>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Sign up" component={SignUp} />
  </Stack.Navigator>;
};

export default Routes;
