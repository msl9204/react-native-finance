import React from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppLoading from "./components/AppLoadingPage/AppLoading";
import MainPage from "./components/MainPage/MainPage";
import { GlobalStyle } from "./styles/GlobalStyles";

const Stack = createStackNavigator();

export default function App() {
    return (
        <React.Fragment>
            <AppLoading />
            <NavigationContainer>
                <GlobalStyle OS={Platform.OS}></GlobalStyle>
            </NavigationContainer>
        </React.Fragment>
    );
}
