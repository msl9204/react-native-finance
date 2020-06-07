import React from "react";
import MainPage from "./MainPage";
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function MainStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={MainPage}
                options={{ headerShown: false }}
            />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    );
}
