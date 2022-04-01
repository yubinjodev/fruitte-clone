import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

const Stack = createStackNavigator();

export const Routes = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log(uid);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Sign Up" component={SignUp} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
