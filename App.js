import React from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, View, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AppLoading from "./components/AppLoadingPage/AppLoading";
import MainPage from "./components/MainPage/MainPage";
import StockInfo from "./components/StockInfoPage/StockInfo";
import Search from "./components/SearchPage/Search";
import Profile from "./components/ProfilePage/Profile";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { ProvideAuth } from "./components/Auth/useAuth";
import { GlobalStyle } from "./styles/GlobalStyles";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
    return (
        <React.Fragment>
            <NavigationContainer>
                <ProvideAuth>
                    <Tab.Navigator>
                        <Tab.Screen
                            name="Home"
                            component={MainPage}
                            options={{
                                tabBarIcon: ({ color, size }) => (
                                    <MaterialCommunityIcons
                                        name="home"
                                        color={color}
                                        size={size}
                                    />
                                ),
                            }}
                        />
                        <Tab.Screen
                            name="StockInfo"
                            component={StockInfo}
                            options={{
                                tabBarIcon: ({ color, size }) => (
                                    <AntDesign
                                        name="barschart"
                                        color={color}
                                        size={size}
                                    />
                                ),
                            }}
                        />
                        <Tab.Screen
                            name="Search"
                            component={Search}
                            options={{
                                tabBarIcon: ({ color, size }) => (
                                    <Feather
                                        name="search"
                                        color={color}
                                        size={size}
                                    />
                                ),
                            }}
                        />
                        <Tab.Screen
                            name="Profile"
                            component={Profile}
                            options={{
                                tabBarIcon: ({ color, size }) => (
                                    <AntDesign
                                        name="profile"
                                        color={color}
                                        size={size}
                                    />
                                ),
                            }}
                        />
                    </Tab.Navigator>
                </ProvideAuth>
            </NavigationContainer>
        </React.Fragment>
    );
}
